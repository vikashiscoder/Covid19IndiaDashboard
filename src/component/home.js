import React, { Component } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

class Home extends Component {
  componentDidMount(){
    var map = L.map('mapid', {
    center: [51.505, -0.09],
    zoom: 5
});
  }
  render() {
    return (
        <div>
         <div id="mapid" width="900px" height="900px"></div>
        </div>
    );
  }
}

export default Home;