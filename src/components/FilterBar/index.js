import React from 'react';
import './index.css';

const FilterBar = props => {
  return (
    <div className="FilterBar">
      <div>Фильтр:</div>
      <div className="ui checkbox">
        <input type="checkbox" name="concert"
          onChange={(e) => props.onChange(e.target)}
          checked={props.filters.includes('concert')}
        />
        <label>Концерты</label>
      </div>
      <div className="ui checkbox">
        <input type="checkbox" name="exhibition"
          onChange={(e) => props.onChange(e.target)}
          checked={props.filters.includes('exhibition')} />
        <label>Выставки</label>
      </div>
      <div className="ui checkbox">
        <input type="checkbox" name="favorites"
          onChange={(e) => props.onCheckFavorites(e.target.checked)}
          checked={props.onlyFavorites} />
        <label>Только избранные</label>
      </div>
    </div>
  )
}

export default FilterBar;