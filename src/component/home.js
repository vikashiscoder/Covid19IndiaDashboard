import React, { Component } from 'react';

class Home extends Component {
  componentDidMount(){
    var mymap = L.map('mapid').setView([51.505, -0.09], 13);

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