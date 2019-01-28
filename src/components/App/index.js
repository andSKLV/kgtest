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
      allEvents: EventsData
    }
  }
  componentDidMount () {
    console.log(EventsData)
  }
  render() {
    return <div className="App">
      <SearchBar/>
      <ParamBar/>
      <EventsList elList = {this.state.allEvents}/>
    </div>
  }
}
