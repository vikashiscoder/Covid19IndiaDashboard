import React, { Component } from 'react';
import statedata from '../service/statedata';

class Home extends Component {

iconhtml = "<span style='height: SIZEpx;  width: SIZEpx;  background-color: green;  border-radius: 50%;  display: flex; color: white; font:bold 10px serif;justify-content: center;align-items: center;'>DATA</span>";

sizestring = 'SIZE';
datastring = 'DATA';

smallicon = {
        className: 'custom-div-icon',
        html: this.iconhtml.replace(new RegExp(this.sizestring, 'g'),'10'),
    };
mediumicon = {
        className: 'custom-div-icon',
        html: this.iconhtml.replace(new RegExp(this.sizestring, 'g'),'20'),
    };
bigicon = {
        className: 'custom-div-icon',
        html: this.iconhtml.replace(new RegExp(this.sizestring, 'g'),'30'),
    };
verybigicon = {
        className: 'custom-div-icon',
        html: this.iconhtml.replace(new RegExp(this.sizestring, 'g'),'40')
    };

constructor(props){
  super(props);
  this.state = {};
}



getData = () => {
   fetch("https://cors-anywhere.herokuapp.com/https://api.covidindiatracker.com/state_data.json")
      .then(res => res.json())
      .then(
        (result) => {
         result.forEach(x => {
            let stateRec = statedata.filter(s => s.name == x.state); 
            if(stateRec != undefined && stateRec.length > 0){
              x.lat = stateRec[0].lat;
              x.long = stateRec[0].long;
            }
          });

          this.setState({
            isLoaded: true,
            items: result
          });

        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
      .then(() => {
        this.setupMap();
        })
      
}

setupMap(){
  var mymap = L.map('mapid').setView([20.5937, 78.9629], 5);

  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', 
    {
      attribution: 'Map data',
      id: 'vikashis/ckd8rjoov0rz91io99r2t1bqq',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'pk.eyJ1IjoidmlrYXNoaXMiLCJhIjoiY2tkOHI4YnZsMDZpeDJ6bWliM2Y5dTZiaCJ9.EweMjk3iwotgronCLOX-Fw'
    }
  ).addTo(mymap);

console.log(this.state.items.length)
  this.state.items.forEach(x => {
    let icon =  Object.assign({},this.bigicon);
    if(x.active < 100){
      icon =  Object.assign({},this.smallicon);
    }
    
    if(x.active >= 100 && x.active < 1000){
      icon =  Object.assign({},this.mediumicon);
    }

    icon.html = icon.html.replace
    ('DATA', x.active);
    L.marker([x.lat, x.long], { icon: L.divIcon(icon) }).addTo(mymap);
  })
  
}


componentDidMount(){
    this.getData();
  }


  render() {
    return (
        <div>
AAAS
<div id="mapid"></div>
        </div>
    );
  }
}

export default Home;