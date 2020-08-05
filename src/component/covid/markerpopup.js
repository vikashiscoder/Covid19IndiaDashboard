import React, { Component } from 'react';
import Statemap from './statemap';
import './style/style.css';

const containerStyle = 
{display:"grid",
gridTemplateColumn:"auto auto",
gridGap: "10px 50px"
};

class Markerpopup extends Component {



constructor(props){
  super(props);
  this.state = {
    item:props
  };
}



componentDidMount(){
  }


  render() {
    return (
      <div style={containerStyle}>Test</div>
    )
}
}

export default Markerpopup;