import React, { Component } from 'react';
import statedata from '../service/statedata';

class Home extends Component {

iconhtml = "<span style='height: SIZEpx;  width: SIZEpx;  background-color: green;  border-radius: 50%;  display: flex; color: white; font:bold 10px serif;justify-content: center;align-items: center;'>DATA</span>";

sizestring = 'SIZE';
datastring = 'DATA';

smallicon = L.divIcon({
        className: 'custom-div-icon smallStyle',
        html: this.iconhtml.replace(this.sizestring,'10'),
    });
mediumicon = L.divIcon({
        className: 'custom-div-icon smallStyle',
        html: this.iconhtml.replace(this.sizestring,'20'),
    });
bigicon = L.divIcon({
        className: 'custom-div-icon smallStyle',
        html: this.iconhtml.replace(this.sizestring,'30'),
    });
verybigicon = L.divIcon({
        className: 'custom-div-icon smallStyle',
        html: this.iconhtml.replace(this.sizestring,'40'),
    });

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
        this.setupMap()
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

  this.state.items.forEach(x => {
    let icon = this.smallicon;
    console.log(1)
    icon.options.html = icon.options.html.replace('DATA', 'x.active');
    console.log(icon.options.html)
    L.marker([11.1271, 78.6569], { icon: icon }).addTo(mymap);
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