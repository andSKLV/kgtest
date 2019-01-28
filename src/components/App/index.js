import React from 'react';
import SearchBar from '../SearchBar';
import './index.css';

export default class App extends React.Component {
  constructor (props) {
    super(props);
  }
  render() {
    return <div className="App">
      Start
      <SearchBar/>
    </div>
  }
}
