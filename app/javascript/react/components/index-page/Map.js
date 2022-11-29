import React from "react";
import GoogleMapReact from 'google-map-react';

const Map = (props) => {

  const GeoMarker = () => (
      <i className="fa-solid fa-mountain fa-3x"></i>
  );

  let location = {
    center: {lat: 42.3604, lng: -71.0580},
    zoom: 7,
    name: "Boston"
  }
  if (props.resort.id) {
    location = {
      center: {lat: parseFloat(props.resort.latitude), lng: parseFloat(props.resort.longitude)},
      zoom: 7,
      name: props.resort.name
    }
  }

  return (
    <div className="map small-6" style={{width: '25em', height: '30em', border: 'thick outset #E4B070'}}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAK_bFqGHyVGSNd9-gRog6sitsU616BL8c' }}
        center={location.center}
        zoom={location.zoom}
        >
          <GeoMarker
          lat={location.center.lat}
          lng={location.center.lng}
          text={location.name}
          />
      </GoogleMapReact>
    </div>
    )
  
}

export default Map