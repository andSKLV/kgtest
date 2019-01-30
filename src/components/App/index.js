import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import SearchBar from '../SearchBar';
import SortBar from '../SortBar';
import FilterBar from '../FilterBar';
import EventsList from '../EventsList';
import EventPage from '../EventPage';
import EventsData from '../../tmp/events.json'
import {SaveToStore,GetFromStore} from './storeControl.js';

import './index.css';

export default class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      allEvents: EventsData,
      renderEvents: EventsData,
      selectValue: 'none',
      searchValue: '',
      filters: ['concert','exhibition'],
      onlyFavorites: false,
    }
  }
  componentDidMount () {
    const savedState = GetFromStore();
    if (!savedState) return false;
    this.setState(prev=>{
      const next = prev.allEvents.map(el=>{
        if (savedState.favorites.includes(el.id)) el.isFavorite = true;
        return el;
      });
      return {allEvents: next}
    })
    const defaultState = {
      selectValue: 'none',
      searchValue: '',
      filters: ['concert','exhibition'],
      onlyFavorites: false,
    }
    const nextState = {}
    Object.keys(savedState).forEach(key=>{
      if (key!=='favorites'&&defaultState[key].toString()!==savedState[key].toString())  nextState[key]=savedState[key];
    })
    if (Object.keys(nextState).length) {
      this.setState(nextState,()=>this.applyAll());
    }
  }
  componentDidCatch (err,info) {
    console.error(err,info);
  }
  onSelect (val) {
    this.setState({selectValue: val},()=>this.applyAll());
  }
  onChangeSearch (val) {
    this.setState({searchValue:val},()=>this.applyAll());
  }
  onChangeFilter ({name,checked}) {
    let filters = [];
    const add = name => {
      filters = [...this.state.filters,name];
    }
    const remove = name => {
      filters = [...this.state.filters].filter(val=>val!==name);
    }
    (checked) ? add(name) : remove (name);
    this.setState({filters},()=>this.applyAll())
  }
  onCheckFavorites (isChecked) {
    this.setState({onlyFavorites: isChecked},()=>this.applyAll())
  }
  onFavClick (id, isFaved) {
    this.setState((prev) => {
      const res = prev.allEvents.map(el=>{
        if (el.id===id) el.isFavorite = !el.isFavorite;
        return el;
      })
      return {allEvents: res}
    },()=>this.saveStorage());
  }
  applyAll () {
    let elems = this.state.allEvents;
    const {selectValue, searchValue, filters, onlyFavorites} = this.state;
    elems = elems.filter(el=>el.title.match(new RegExp(searchValue,'gi')));
    switch (selectValue) {
      case 'increase':
        elems = elems.sort((f,s)=>f.price-s.price);
        break;
      case 'decrease':
        elems = elems.sort((f,s)=>s.price-f.price);
        break;
      default:
        break;
    }
    elems = elems.filter(el=>filters.includes(el.type));
    if (onlyFavorites) elems = elems.filter(el=>el.isFavorite);
    this.saveStorage();
    this.setState({renderEvents: elems})
  }
  saveStorage () {
    SaveToStore(this.state);
  }
  render() {
    return (
      <Router>
        <div className="App">
        <Route exact path='/' render={()=>{
          return (
            <>
              <SearchBar onChange = {(val)=>this.onChangeSearch(val)} value={this.state.searchValue}/>
              <FilterBar 
                onChange = {(el)=>this.onChangeFilter(el)} 
                onCheckFavorites={(isChecked)=>this.onCheckFavorites(isChecked)}
                filters = {this.state.filters}
                onlyFavorites = {this.state.onlyFavorites}
              />
              <SortBar onSelect={(val)=>this.onSelect(val)} value={this.state.selectValue}/>
              <EventsList elList = {this.state.renderEvents} onFavClick={(id,isFaved)=>this.onFavClick(id,isFaved)}/>
            </>
          )
        }}
          
        />
        <Route exact path='/event/:id' render={({match})=>{
          debugger;
          const el = this.state.allEvents.filter(e=>e.id===Number(match.params.id))[0];
          if (!el) return (
            <div>
              Такого мероприятия не существует
            </div>
          )
          return <EventPage
            title={el.title} 
            price = {el.price} 
            description = {el.description} 
            key={el.id}
            isFavorite = {el.isFavorite}
            onFavClick = {()=>{this.onFavClick(el.id)}}
          />
          }}
        />
        </div>
      </Router>
    )
  }
}
