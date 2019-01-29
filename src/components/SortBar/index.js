import React from 'react';
import './index.css';

const SortBar = props =>{
  return (
    <div className="SortBar">
      <div>Сортировать по:</div>
      <select className="ui compact selection dropdown" defaultValue={props.value} onChange={(e)=>props.onSelect(e.target.value)}>
        <option value="none" disabled>-----</option>
        <option value="increase">увеличению цены</option>
        <option value="decrease">уменьшению цены</option>
      </select>
    </div>
  )
}

export default SortBar;