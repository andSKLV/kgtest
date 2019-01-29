import React from 'react';
import EventBlock from '../EventBlock';
import './index.css';

const EventsList = props => {
  const makeList = list => {
    if (list.length) return (<div className="ui card EventsList">
      {list.map((el,i)=>{
        return <EventBlock 
          title={el.title} 
          price = {el.price} 
          description = {el.description} 
          key={el.id}
          isFavorite = {el.isFavorite}
          onFavClick = {()=>{props.onFavClick(el.id)}}
        />
      })}
    </div>)
    else return <div>Нет подходящий событий</div>
  }
  console.log(props.elList);
  return makeList(props.elList)
  
}

export default EventsList;