import React from "react";
import GoogleMapReact from 'google-map-react';

const Map = (props) => {

  const defaultProps = {
    center: {
      lat: 42.3601,
      lng: -71.0589
    },
    zoom: 6
  };
  
  let mapMarkers = ''
  if (props.resorts !== '') {
    mapMarkers = props.resorts.map((resort) => {
      if (props.hoveredResort.id === resort.id) {
        return (
          <i 
            className="fa-solid fa-mountain fa-3x"
            style={{color: 'red'}}
            lat={resort.latitude}
            lng={resort.longitude}
            name={resort.name}
            key={resort.id}
           />
        )
      } else {
        return (
          <i 
            className="fa-solid fa-mountain fa-2x"
            lat={resort.latitude}
            lng={resort.longitude}
            name={resort.name}
            key={resort.id}
           />
        )
      }
    })
  }

  return (
    <div className="map cell small-6" style={{width: '25em', height: '25em', border: 'thick outset #E4B070'}}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAK_bFqGHyVGSNd9-gRog6sitsU616BL8c' }}
        center={defaultProps.center}
        zoom={defaultProps.zoom}
        >
        {mapMarkers}  
      </GoogleMapReact>
    </div>
  )
}

export default Map
