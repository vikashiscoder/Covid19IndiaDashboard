import React, { Component } from 'react';
import statedata from '../../service/statedata';
import Markerpopup from './markerpopup';
import { renderToString } from 'react-dom/server';


class Statemap extends Component {

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
  //var mymap = L.map('mapid').setView([23.5937, 78.9629], 5);

  //Set map bounds
  var maxBounds = [
    [6.4626999, 68.1097], //Southwest
    [35.513327, 97.39535869999999]  //Northeast
];

  var mymap = L.map('mapid', {
    'center': [0, 0],
    'zoom': 0,
    'maxBounds': maxBounds
}).fitBounds(maxBounds);

  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', 
    {
      attribution: '<b>Click on count for more deteils</b>',
      id: 'vikashis/ckdiq0pf50teu1iprlvljatvg',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'pk.eyJ1IjoidmlrYXNoaXMiLCJhIjoiY2tkOHI4YnZsMDZpeDJ6bWliM2Y5dTZiaCJ9.EweMjk3iwotgronCLOX-Fw'
    }
  ).addTo(mymap);


//map.setMaxBounds(maxBounds);
//map.fitBounds(maxBounds);


  this.state.items.forEach(x => {
    let icon =  Object.assign({},this.bigicon);
    if(x.active < 100){
      icon =  Object.assign({},this.smallicon);
    }
    
    if(x.active >= 100 && x.active < 9999){
      icon =  Object.assign({},this.mediumicon);
    }

    icon.html = icon.html.replace
    ('DATA', x.active);
    let marker = L.marker([x.lat, x.long], { icon: L.divIcon(icon) }).addTo(mymap);

/*
    let popupstring  = 
    '<div style="display:grid;grid-template-column:auto auto;grid-gap: 10px 50px;">' +
      this.addadiv(x.state,'grid-column-start: 1;grid-column-end: 3;color:green;') +
          this.addadiv('ACTIVE') + this.addadiv(x.active) +
    this.addadiv('CONFIRMED') + this.addadiv(x.confirmed) +
    this.addadiv('RECOVERED') + this.addadiv(x.recovered) +
    this.addadiv('DEATHS') + this.addadiv(x.deaths) +
    '</div>';
    */
    //console.log(this.addadiv('STATE',''));
    //marker.bindPopup(popupstring).openPopup();
    marker.bindPopup(renderToString(<Markerpopup data={x}></Markerpopup>)).openPopup();

  })
  
}

addadiv(str,style){
  return "<div style='" + style + "'>" + str + "</div>";
}


componentDidMount(){
    this.getData();
  }


  render() {
    return (
        <div>
          <div id="mapid"></div>
        </div>
    );
  }
}

export default Statemap;