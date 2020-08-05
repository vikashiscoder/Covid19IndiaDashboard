import React, { Component } from 'react';
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
    /*
    for (const [index, value] of this.props.data.districtData) {
        items.push(<div key={value.id + 'name' }>{value.name}</div>);
        items.push(<div key={value.id + 'confirmed' }>{value.confirmed}</div>)
      }

      <div >this.props.data.state</div>
      {items}
      */
      //console.log(this.props.data.districtData);

    return (
        <div>
          AAA
          
        </div>
    );
  }
}

export default Districtdata;