import React, { Component } from 'react';
import Statemap from './statemap';
import styles from './style/style.css';

class Markerpopup extends Component {



constructor(props){
  super(props);
  this.state = {};
}



componentDidMount(){
  }


  render() {
    const containerStyle = 
      { display:"grid",
        gridTemplateColumns:"auto auto",
        gridGap: "10px 50px"
      };

    return (
      <div style={containerStyle}>
        <div className={styles.popupgreenheader}> {this.props.data.state} </div>
        <div>ACTIVE</div> <div>{this.props.data.active}</div>
        <div>CONFIRMED</div> <div>{this.props.data.confirmed}</div>
        <div>RECOVERED</div> <div>{this.props.data.recovered}</div>
        <div>DEATHS</div> <div>{this.props.data.deaths}</div>
      </div>
    )
}
}

export default Markerpopup;