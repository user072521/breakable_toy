import React, { useEffect, useState } from "react"
import FetchResorts from "../services/FetchResorts";
import FavoriteButton from "./FavoriteButton";
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
    const weatherData = await FetchResorts.getSpecificWeather(resortData.resort.latitude, resortData.resort.longitude)
    setWeather([
      ...weather,
      weatherData
    ])
    const spreadsheetResponse = await FetchResorts.getSpreadsheet()
  }
  
  useEffect(() => {
    getSpecificResort()
  }, [])
  
  let specificResort = {}
  let favorite = 0
  let information = ""
  if (resort.resortData) {

    favorite = resort.resortData.favorite
    
    specificResort = {
      name: resort.resortData.resort.name,
      latitude: resort.resortData.resort.latitude,
      longitude: resort.resortData.resort.longitude
    }

    information = (
      <div className="resort-information cell small-6">
        <h5>{resort.resortData.resort.name}</h5>
        <p>{resort.resortData.resort.city}, {resort.resortData.resort.state}</p>
        <a href={resort.resortData.resort.website}>{resort.resortData.resort.website}</a>
      </div>
    )
  }
  
  return(
    <div className="resort-show-page">
      <div className="favorite-button">
        <FavoriteButton favorite={favorite} id={props.match.params.id}/>
      </div>
      <div className="grid-x grid-margin-x">
        <div className="cell small-6">
          <Map resort={specificResort} />
        </div>
        {information}
      </div>
      <WeatherContainer weather={weather} />
    </div>
  )

}

export default ResortShowContainer