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
    }
  }
  componentDidCatch (err,info) {
    console.log(err,info);
  }
  onSelect (val) {
    this.setState({selectValue: val},()=>this.applyAll());
  }
  onChangeSearch (val) {
    debugger;
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
  applyAll () {
    let elems = this.state.allEvents;
    const {selectValue, searchValue, filters} = this.state;
    elems = elems.filter(el=>el.title.match(new RegExp(searchValue,'gi')));
    debugger;
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
    this.setState({renderEvents: elems})
  }
  render() {
    return <div className="App">
      <SearchBar onChange = {(val)=>this.onChangeSearch(val)} value={this.state.searchValue}/>
      <FilterBar onChange = {(el)=>this.onChangeFilter(el)}/>
      <SortBar onSelect={(val)=>this.onSelect(val)} value={this.state.selectValue}/>
      <EventsList elList = {this.state.renderEvents}/>
    </div>
  }
}
