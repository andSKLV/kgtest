import React from 'react';
import './index.css';

const FilterBar = props =>{
  return (
    <div className="FilterBar">
      <div>Фильтр:</div>
      {/* <div className="ui checkbox">
        <input type="checkbox" name="all" onChange={(e)=>props.onChange(e.target)}/>
        <label>Все</label>
      </div> */}
      <div className="ui checkbox">
        <input type="checkbox" name="concert" onChange={(e)=>props.onChange(e.target)} defaultChecked/>
        <label>Концерты</label>
      </div>
      <div className="ui checkbox">
        <input type="checkbox" name="exhibition" onChange={(e)=>props.onChange(e.target)} defaultChecked/>
        <label>Выставки</label>
      </div>
    </div>
  )
}

export default FilterBar;