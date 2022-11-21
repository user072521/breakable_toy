import React from "react";

const WeatherTile = (props) => {

  const key = Object.keys(props.weather)[0]
  const date = new Date(Object.keys(props.weather)[0])
  const weather = Math.round(props.weather[key])

  return (
    <div className="cell callout">
      <center>
        <div className="callout">
          <h8>{date.toLocaleDateString('en-us', { month:"numeric", day:"numeric" })}</h8>
          <h6><strong>{date.toLocaleDateString('en-us', { weekday:"short" })}</strong></h6>
        </div>
        <h5>{weather}<sup>°F</sup></h5>
      </center>
    </div>
  )
}


export default WeatherTile