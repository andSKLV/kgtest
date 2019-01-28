import React from 'react';
import './index.css';

const SearchBar = props => {
  return <div className="ui big icon input round SearchBar">
    <input type="text" placeholder="Поиск по событиям"/>
    <i className="search icon"></i>
  </div>
}

export default SearchBar;