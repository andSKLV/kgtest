import React from 'react';
import './index.css';

class EventBlock extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
      isFaved: props.isFaved || false,
      id: props.id
    }
  }
  fav (el) {
    this.setState({isFaved: !this.state.isFaved},()=>this.props.onFavClick(this.state.isFaved));
  }
  render () {
    const isFaved = this.state.isFaved&&'faved'
    return (
      <div className="content">
        <i className={`right floated star icon ${isFaved}`} onClick={(e)=>this.fav(e.target)}></i>
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