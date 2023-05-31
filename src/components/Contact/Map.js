import React from "react";
import GoogleMapReact from 'google-map-react';

export default function SimpleMap(){
  const defaultProps = {
    api:  process.env.GATSBY_GOOGLE_API,
    center: {
      lat: 51.05284947,
      lng: -114.011307
    },
    zoom: 11,
    mapStyle: [{"elementType":"geometry","stylers":[{"color":"#262a36"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#83a1ba"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#262a36"}]},{"featureType":"administrative.country","elementType":"geometry.stroke","stylers":[{"color":"#4b6878"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.fill","stylers":[{"color":"#64779e"}]},{"featureType":"administrative.province","elementType":"geometry.stroke","stylers":[{"color":"#4b6878"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#3c64b1"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#6294c5"}]},{"featureType":"poi","elementType":"labels.text.stroke","stylers":[{"color":"#1d2c4d"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#304a7d"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#98a5be"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#1d2c4d"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#3c64b1"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#255763"}]},{"featureType":"road.highway","elementType":"labels.text.stroke","stylers":[{"color":"#023e58"}]},{"featureType":"transit","elementType":"labels.text.fill","stylers":[{"color":"#98a5be"}]},{"featureType":"transit","elementType":"labels.text.stroke","stylers":[{"color":"#1d2c4d"}]},{"featureType":"transit.line","elementType":"geometry.fill","stylers":[{"color":"#283d6a"}]},{"featureType":"transit.station","elementType":"geometry","stylers":[{"color":"#3a4762"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#0e1626"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#4e6d70"}]}],
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '600px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: defaultProps.api}}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        styles={defaultProps.mapStyle}
      >
      </GoogleMapReact>
    </div>
  );
}