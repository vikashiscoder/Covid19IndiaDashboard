import React, { Component } from 'react';
import Statemap from './statemap';

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