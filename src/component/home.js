import React, { Component } from 'react';
import statedata from '../service/statedata';

class Home extends Component {

smallicon = L.divIcon({
        className: 'custom-div-icon smallStyle',
        html: "<span style='height: 10px;  width: 10px;  background-color: green;  border-radius: 50%;  display: flex; color: white; font:bold 10px serif;justify-content: center;align-items: center;'>DATA</span>",
    });
mediumicon = L.divIcon({
        className: 'custom-div-icon smallStyle',
        html: "<span style='height: 20px;  width: 20px;  background-color: green;  border-radius: 50%;  display: flex; color: white; font:bold 10px serif;justify-content: center;align-items: center;'>DATA</span>",
    });
bigicon = L.divIcon({
        className: 'custom-div-icon smallStyle',
        html: "<span style='height: 30px;  width: 30px;  background-color: green;  border-radius: 50%;  display: flex; color: white; font:bold 10px serif;justify-content: center;align-items: center;'>DATA</span>",
    });
verybigicon = L.divIcon({
        className: 'custom-div-icon smallStyle',
        html: "<span style='height: 40px;  width: 40px;  background-color: green;  border-radius: 50%;  display: flex; color: white; font:bold 10px serif;justify-content: center;align-items: center;'>DATA</span>",
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
                  console.log(result.length);
         result.forEach(x => {
           console.log(x.state);
           
            let stateRec = statedata.filter(s => s.name == x.state); 
            console.log(stateRec);
            if(stateRec != undefined && stateRec.length > 0){
              x.lat = stateRec[0].lat;
              x.long = stateRec[0].long;
            }
            
          });
          //console.log(result.length);
          this.setState({
            isLoaded: true,
            items: result.items
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
}


componentDidMount(){
    this.getData();
    var mymap = L.map('mapid').setView([20.5937, 78.9629], 5);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data',
    
    id: 'vikashis/ckd8rjoov0rz91io99r2t1bqq',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoidmlrYXNoaXMiLCJhIjoiY2tkOHI4YnZsMDZpeDJ6bWliM2Y5dTZiaCJ9.EweMjk3iwotgronCLOX-Fw'
}).addTo(mymap);

/*
var popup = L.popup()
    .setLatLng([11.1271, 78.6569])
    .setContent("I am a standalone popup.")
    .openOn(mymap);
*/



L.marker([11.1271, 78.6569], { icon: verybigicon }).addTo(mymap);
//L.marker([11.1271, 78.6569], { icon: mediumicon }).addTo(mymap);


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