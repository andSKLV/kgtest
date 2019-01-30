import React from 'react';
import EventBlock from '../EventBlock';
import { withRouter } from 'react-router-dom';
import './index.css';

const EventsList = props => {
  const makeList = list => {
    if (list.length) return (<div className="ui card EventsList">
      {list.map((el, i) => {
        return <EventBlock
          title={el.title}
          price={el.price}
          description={el.description}
          key={el.id}
          isFavorite={el.isFavorite}
          onFavClick={() => { props.onFavClick(el.id) }}
          onClick={() => props.history.push(`/event/${el.id}`)}
        />
      })}
    </div>)
    else return <div>Нет подходящий событий</div>
  }
  return makeList(props.elList)

}

export default withRouter(EventsList);