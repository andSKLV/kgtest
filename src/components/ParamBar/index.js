import React from 'react';
import './index.css';

const ParamBar = props =>{

    return (
      <div>
        Param Bar
        <select className="ui compact selection dropdown" defaultValue={props.value} onChange={(e)=>props.onSelect(e.target.value)}>
          <option value="all">Все</option>
          <option value="concert">Концерты</option>
          <option value="exhibition">Выставки</option>
        </select>
      </div>
    )


}

export default ParamBar;