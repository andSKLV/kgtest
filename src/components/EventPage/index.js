import React from 'react';
import './index.css';

const EventPage = props => {
  let favedClassName = props.isFavorite ? 'faved' : '';
  return (
    <div className="ui card EventPage">
      <div className="content">
        <img className="poster" alt="poster" src="https://fakeimg.pl/250x100/"/>
        <i className={`right floated star icon ${favedClassName}`} onClick={()=>props.onFavClick()}></i>
        <div className="header">{props.title}</div>
        <div className="meta">{`${props.price} ₽`}</div>
        <div className="description">
          {props.description}
        </div>
      </div>
    </div>
  )

}

export default EventPage;