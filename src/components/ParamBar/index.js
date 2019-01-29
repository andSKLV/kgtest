import React from 'react';
import './index.css';

const ParamBar = props =>{
  return (
    <div className="ParamBar">
      Param Bar
      <select className="ui compact selection dropdown" defaultValue={props.value} onChange={(e)=>props.onSelect(e.target.value)}>
        <option value="none" disabled>Сортировать по</option>
        <option value="increase">увеличению цены</option>
        <option value="decrease">уменьшению цены</option>
      </select>
    </div>
  )
}

export default ParamBar;