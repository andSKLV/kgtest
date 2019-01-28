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
      renderEvents: EventsData
    }
  }
  onSelect (val) {
    if (val==='all') this.setState({renderEvents: this.state.allEvents})
    else this.setState({renderEvents: this.state.allEvents.filter(el=>el.type===val)})
  }
  render() {
    return <div className="App">
      <SearchBar/>
      <ParamBar onSelect={(val)=>this.onSelect(val)}/>
      <EventsList elList = {this.state.renderEvents}/>
    </div>
  }
}
