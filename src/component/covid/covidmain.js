import React, { Component } from 'react';
import Statemap from './statemap';
import './style/style.css';
class Covidmain extends Component {

constructor(props){
  super(props);
  this.state = {};
}



componentDidMount(){
  }


  render() {
    return (
        <div>
          <Statemap />
        </div>
    );
  }
}

export default Covidmain;