import React, { Component } from 'react';

class Home extends Component {
  componentDidMount(){
    var mymap = L.map('mapid').setView([20.5937, 78.9629], 5);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data',
    
    id: 'vikashis/ckd8rjoov0rz91io99r2t1bqq',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoidmlrYXNoaXMiLCJhIjoiY2tkOHI4YnZsMDZpeDJ6bWliM2Y5dTZiaCJ9.EweMjk3iwotgronCLOX-Fw'
}).addTo(mymap);

//var marker = L.marker([11.1271, 78.6569]).addTo(mymap);
var popup = L.popup()
    .setLatLng([11.1271, 78.6569])
    .setContent("I am a standalone popup.")
    .openOn(mymap);

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