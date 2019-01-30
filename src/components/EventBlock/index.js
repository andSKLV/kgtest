import React from "react";
import "./index.css";

const EventBlock = props => {
  let favedClassName = props.isFavorite ? "faved" : "";
  return (
    <div className="content" onClick={() => props.onClick()}>
      <i
        className={`right floated star icon ${favedClassName}`}
        onClick={e => {
          e.stopPropagation();
          props.onFavClick();
        }}
      />
      <div className="header">{props.title}</div>
      <div className="meta">{`${props.price} ₽`}</div>
      <div className="description">{props.description}</div>
    </div>
  );
};

export default EventBlock;
