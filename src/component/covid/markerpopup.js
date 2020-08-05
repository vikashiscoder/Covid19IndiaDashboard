import React, { Component } from 'react';
import Statemap from './statemap';
import Districtdata from './districtdata';
import styles from './style/style.css';

class Markerpopup extends Component {



constructor(props){
  super(props);
}



componentDidMount(){
  }

showDistrict(e){
  console.log(e);
}

  render() {
    const containerStyle = 
      { display:"grid",
        gridTemplateColumns:"auto auto",
        gridGap: "2px 50px",
      };
    const s = 
      { color:"green"
      };

    return (

        <div style={containerStyle}>
          <div className="popupheader"> {this.props.data.state} </div>
          <div>ACTIVE</div> <div>{this.props.data.active}</div>
          <div>CONFIRMED</div> <div>{this.props.data.confirmed}</div>
          <div>RECOVERED</div> <div>{this.props.data.recovered}</div>
          <div>DEATHS</div> <div>{this.props.data.deaths}</div>
        </div>

        <div>
          <div>Name</div><div>Confirmed</div>
            {this.props.data.districtData.map(x => (
                <div className="districtrow">
                  <span>{x.name}</span>-<span>{x.confirmed}</span>
                </div>
            ))}

        </div> 

    )
}
}

export default Markerpopup;