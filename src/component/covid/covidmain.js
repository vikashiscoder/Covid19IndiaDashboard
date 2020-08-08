import React, { Component } from 'react';
import Statemap from './statemap';
import './style/covidstyle.css';
class Covidmain extends Component {

constructor(props){
  super(props);
  this.state = {};
}

componentDidMount(){
  }

  render() {
    return (
        <div class="grid-container">
          <div class="maintext fade-in"><h1>COVID India Dashboard</h1></div>
          <Statemap />
        </div>
    );
  }
}

export default Covidmain;