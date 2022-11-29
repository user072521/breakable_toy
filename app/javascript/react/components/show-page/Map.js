import React from "react";
import GoogleMapReact from 'google-map-react';

const Map = (props) => {

  const GeoMarker = () => (
    <i className="fa-solid fa-mountain fa-3x"></i>
  );

  const location = {
    center: {lat: parseFloat(props.resort.latitude), lng: parseFloat(props.resort.longitude)},
    zoom: 10,
    name: props.resort.name
  }

  if (props.resort.name) {
    return (
      <div className="map" style={{width: '25em', height: '25em', border: 'thick outset #E4B070'}}>
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
  } else {
    return(
      <div></div>
    )
  }
  
}

export default Map