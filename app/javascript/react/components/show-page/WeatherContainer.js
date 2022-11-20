import React from "react"

const WeatherContainer = (props) => {

  const forecast = props.weather.map((day) => {
    debugger
    const key = Object.keys(day)[0]
    const value = day[value]
    return (
      <div key={props.weather.index(day)}>
        <p>{key}</p><p>{value}</p>
      </div>
    )
  })

  return (
    forecast
  )
}

export default WeatherContainer