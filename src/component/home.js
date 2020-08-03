import React, { Component } from 'react';

class Home extends Component {

constructor(props){
  super(props);
  this.state = {};
}

  componentDidMount(){
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

var icon = L.divIcon({
        className: 'custom-div-icon',
        html: "<span style='height: 10px;  width: 10px;  background-color: green;  border-radius: 50%;  display: flex; color: white; font:bold 10px serif;justify-content: center;align-items: center;'>1</span>",
    });
    
L.marker([11.1271, 78.6569], { icon: icon }).addTo(mymap);


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