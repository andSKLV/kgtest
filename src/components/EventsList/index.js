import React from 'react';
import EventBlock from '../EventBlock';
import './index.css';

const EventsList = props => {
  return <div className="ui card EventsList">
    {props.elList.map((el,i)=>{
      return <EventBlock title={el.title} price = {el.price} description = {el.description} key={i}/>
    })}
  </div>
}

export default EventsList;