import React from "react";

const WeatherTile = (props) => {

  const key = Object.keys(props.weather)[0]
  const date = new Date(Object.keys(props.weather)[0])
  const weather = Math.round(props.weather[key])

  return (
    <div className="cell callout weather-tile">
      <center>
        <p>{weather}<sup>°F</sup></p>
        <div className="callout date">
          <p><strong>{date.toLocaleDateString('en-us', { weekday:"short" })}</strong></p>
          <p>{date.toLocaleDateString('en-us', { month:"numeric", day:"numeric" })}</p>
        </div>
      </center>
    </div>
  )
}


export default WeatherTile