import React from 'react';
import './index.css';

class EventBlock extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
      isFaved: props.isFaved || false
    }
  }
  render () {
    return (
      <div className="content">
        <i className="right floated star icon faved"></i>
        <div className="header">{this.props.title}</div>
        <div className="meta">{`${this.props.price} ₽`}</div>
        <div className="description">
          {this.props.description}
        </div>
      </div>
    ) 
  }

}

export default EventBlock;