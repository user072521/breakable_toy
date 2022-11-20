import React from "react";
import GoogleMapReact from 'google-map-react';

const Map = (props) => {

  const AnyReactComponent = ({ text }) => (
    <div style={{
      position: 'relative', color: 'white', background: 'red',
      height: 40, width: 60, top: -20, left: -30,
    }}>
      {text}
    </div>
  );

  const location = {
    center: {lat: parseFloat(props.resort.latitude), lng: parseFloat(props.resort.longitude)},
    zoom: 10,
    name: props.resort.name
  }

  if (props.resort.name) {
    return (
      <div className="map" style={{width: '25em', height: '25em'}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAK_bFqGHyVGSNd9-gRog6sitsU616BL8c' }}
          defaultCenter={location.center}
          defaultZoom={location.zoom}
          >
          <AnyReactComponent
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