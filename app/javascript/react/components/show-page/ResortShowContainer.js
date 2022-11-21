import React, { useEffect, useState } from "react"
import FetchResorts from "../services/FetchResorts";
import Map from "./Map";
import WeatherContainer from "./WeatherContainer";

const ResortShowContainer = (props) => {

  const [resort, setResort] = useState({})
  const [weather, setWeather] = useState([])

  const getSpecificResort = async () => {
    const resortData = await FetchResorts.getSpecificResort(props.match.params.id)
    setResort({
      ...resort,
      resortData
    })
    const weatherData = await FetchResorts.getSpecificWeather(resortData.latitude, resortData.longitude)
    setWeather([
      ...weather,
      weatherData
    ])
  }
  
  useEffect(() => {
    getSpecificResort()
  }, [])
  
  let specificResort = {}
  if (resort.resortData) {
    specificResort = {
      name: resort.resortData.name,
      latitude: resort.resortData.latitude,
      longitude: resort.resortData.longitude
    }
  }

  return(
    <div className="grid-x">
      <Map resort={specificResort} />
      <WeatherContainer weather={weather} />
    </div>
  )

}

export default ResortShowContainer