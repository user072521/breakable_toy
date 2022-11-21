import React from "react"
import WeatherTile from "./WeatherTile"

const WeatherContainer = (props) => {

  let daily_forecast = []
  if (props.weather.length > 0) {
    daily_forecast = props.weather[0]
  }

  const forecast = (daily_forecast).map((day) => {
    return (
      <div key={daily_forecast.indexOf(day)}>
        <WeatherTile weather={day} />
      </div>
    )
  })

  return (
    <div className="small-6 grid-x row grid-padding-x align-center">
      <center className="small-12">
        <h3>Weather Forecast</h3>
      </center>
      {forecast}
    </div>
  )
}

export default WeatherContainer