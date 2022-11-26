import React, { useEffect, useState } from "react"
import FetchResorts from "../services/FetchResorts";
import FavoriteButton from "./FavoriteButton";
import Map from "./Map";
import WeatherContainer from "./WeatherContainer";

const ResortShowContainer = (props) => {

  const [resort, setResort] = useState({
    users: []
  })
  const [weather, setWeather] = useState([])

  const getSpecificResort = async () => {
    const resortData = await FetchResorts.getSpecificResort(props.match.params.id)
    setResort({
      ...resort,
      resortData
    })
    const weatherData = await FetchResorts.getSpecificWeather(resortData.resort.latitude, resortData.resort.longitude)
    setWeather([
      ...weather,
      weatherData
    ])
  }
  
  useEffect(() => {
    getSpecificResort()
  }, [])
  
  let specificResort = {}
  let favorite = 0
  if (resort.resortData) {
    favorite = resort.resortData.favorite
    specificResort = {
      name: resort.resortData.resort.name,
      latitude: resort.resortData.resort.latitude,
      longitude: resort.resortData.resort.longitude
    }
  }

  return(
    <div>
      <div className="grid-x">
        <Map resort={specificResort} />
        <WeatherContainer weather={weather} />
      </div>
      <FavoriteButton favorite={favorite} id={props.match.params.id}/>
    </div>
  )

}

export default ResortShowContainer