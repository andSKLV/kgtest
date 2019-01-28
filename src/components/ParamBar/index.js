import React from 'react';
import './index.css';

class ParamBar extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
      selectedParam: 'All'
    }
  }
  change (e) {
    const val = e.target.value;
    this.setState({selectedParam:val});
    this.props.onSelect(val);
  }
  render () {
    return (
      <div>
        Param Bar
        <select className="ui compact selection dropdown" defaultValue={this.state.selectedParam} onChange={(e)=>this.change(e)}>
          <option value="all">Все</option>
          <option value="concert">Концерты</option>
          <option value="exhibition">Выставки</option>
        </select>
      </div>
    )
  }

}

export default ParamBar;