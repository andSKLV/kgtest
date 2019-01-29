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
      selectVal: 'none'
    }
  }
  componentDidCatch (err,info) {
    console.log(err,info);
  }
  onSelect (val) {
    if (val==='increase') this.setState({renderEvents: this.state.allEvents.sort((f,s)=>f.price-s.price)})
    else this.setState({renderEvents: this.state.allEvents.sort((f,s)=>s.price-f.price)})
  }
  render() {
    return <div className="App">
      <SearchBar/>
      <ParamBar onSelect={(val)=>this.onSelect(val)} value={this.state.selectVal}/>
      <EventsList elList = {this.state.renderEvents}/>
    </div>
  }
}
