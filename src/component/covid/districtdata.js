import React, { Component } from 'react';
import Statemap from './statemap';
import './style/style.css';
class Districtdata extends Component {

constructor(props){
  super(props);
  this.state = {};
}



componentDidMount(){
  }


  render() {

    items = [];
    for (const [index, value] of this.props.data.districtData) {
        items.push(<div key={value.id + 'name' }>{value.name}</div>);
        items.push(<div key={value.id + 'confirmed' }>{value.confirmed}</div>)
      }

    return (
        <div>
          <div >this.props.data.state</div>
          {items}
        </div>
    );
  }
}

export default Districtdata;