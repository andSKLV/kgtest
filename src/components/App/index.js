import React from 'react';
import SearchBar from '../SearchBar';
import SortBar from '../SortBar';
import FilterBar from '../FilterBar';
import EventsList from '../EventsList';
import EventsData from '../../tmp/events.json'

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
      favorites: [],
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
        if (el.id===id) el.isFavorite = isFaved;
        return el;
      })
      return {allEvents: res}
    })
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
    this.setState({renderEvents: elems})
  }
  render() {
    return <div className="App">
      <SearchBar onChange = {(val)=>this.onChangeSearch(val)} value={this.state.searchValue}/>
      <FilterBar onChange = {(el)=>this.onChangeFilter(el)} onCheckFavorites={(isChecked)=>this.onCheckFavorites(isChecked)}/>
      <SortBar onSelect={(val)=>this.onSelect(val)} value={this.state.selectValue}/>
      <EventsList elList = {this.state.renderEvents} onFavClick={(id,isFaved)=>this.onFavClick(id,isFaved)}/>
    </div>
  }
}
