import React, { Component } from 'react';
import statedata from '../service/statedata';
import Covidmain from './covid/covidmain';

class Home extends Component {

constructor(props){
  super(props);
  this.state = {};
}



componentDidMount(){
  }


  render() {
    return (
        <Covidmain/>
    );
  }
}

export default Home;