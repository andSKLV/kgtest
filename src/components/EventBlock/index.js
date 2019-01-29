import React from 'react';
import './index.css';

const EventBlock = props => {
  let favedClassName = props.isFavorite ? 'faved' : '';
  return (
    <div className="content">
      <i className={`right floated star icon ${favedClassName}`} onClick={()=>props.onFavClick()}></i>
      <div className="header">{props.title}</div>
      <div className="meta">{`${props.price} ₽`}</div>
      <div className="description">
        {props.description}
      </div>
    </div>
  )

}

export default EventBlock;