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

    return (
    <div className="popupfont">
        <div style={containerStyle}>
          <div className="popupheader"> {this.props.data.state} </div>
          <div>ACTIVE</div> <div>{this.props.data.active}</div>
          <div>CONFIRMED</div> <div>{this.props.data.confirmed}</div>
          <div>RECOVERED</div> <div>{this.props.data.recovered}</div>
          <div>DEATHS</div> <div>{this.props.data.deaths}</div>
        </div>
        <hr/>
        <div className="popupcontainer">
          <div className="popuprow"><b> Districtwise count</b> </div>
          <div>Name</div><div>Confirmed</div>
          <div className="scrollablediv popuprow">
            {this.props.data.districtData.map(x => (
                <div className="popupcontainer">
                  <div>{x.name}</div><div>{x.confirmed}</div>
                </div>
            ))}
           </div> 

        </div> 
      </div>
    )
}
}

export default Markerpopup;