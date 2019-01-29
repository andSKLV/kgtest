import React from 'react';
import './index.css';

const SearchBar = props => {
  return <div className="ui big icon input round SearchBar">
    <input type="text" placeholder="Поиск по событиям" onChange={(e)=>props.onChange(e.target.value)} value={props.value}/>
    <i className="search icon"></i>
  </div>
}

export default SearchBar;