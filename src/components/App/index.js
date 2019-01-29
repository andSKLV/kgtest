import React from 'react';
import SearchBar from '../SearchBar';
import ParamBar from '../ParamBar';
import EventsList from '../EventsList';
import EventsData from '../../tmp/events.json'

import './index.css';

export default class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      allEvents: EventsData,
      renderEvents: EventsData,
      selectVal: 'none',
      searchValue: '',
    }
  }
  componentDidCatch (err,info) {
    console.log(err,info);
  }
  onSelect (val) {
    switch (val) {
      case 'increase':
        this.setState({renderEvents: this.state.renderEvents.sort((f,s)=>f.price-s.price)});
        break;
      case 'decrease':
        this.setState({renderEvents: this.state.renderEvents.sort((f,s)=>s.price-f.price)})
        break;
      case 'none':
        break;
    }
  }
  onChangeSearch (val) {
    this.setState({searchValue:val});
    if (val==='') {
      this.setState({renderEvents: this.state.allEvents});
      this.onSelect(this.state.selectVal);
    }
    else this.setState({renderEvents: this.state.renderEvents.filter(el=>el.title.match(new RegExp(val,'gi')))})
  }
  render() {
    return <div className="App">
      <SearchBar onChange = {(val)=>this.onChangeSearch(val)} value={this.state.searchValue}/>
      <ParamBar onSelect={(val)=>this.onSelect(val)} value={this.state.selectVal}/>
      <EventsList elList = {this.state.renderEvents}/>
    </div>
  }
}
