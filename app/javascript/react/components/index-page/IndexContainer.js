import React, { useEffect, useState } from "react"
import ResortsList from "./ResortsList"
import FetchResorts from "../services/FetchResorts"
import Map from "./Map"


const IndexContainer = (props) => {

  const states = {
    MA: "Massachusetts",
    RI: "Rhode Island",
    CT: "Connecticut",
    VT: "Vermont",
    ME: "Maine",
    NH: "New Hampshire"
  }

  const [resorts, setResorts] = useState({})
  const [hoveredResort, setHoveredResort] = useState({})

  const getResorts = async () => {
    const resortData = await FetchResorts.getResorts()
    setResorts({
      ...resorts,
      resortData
    })
  }

  useEffect(() => {
    getResorts()
  }, [])

  let resortStates = []
  if (resorts.resortData) {
    resortStates = Object.keys(resorts.resortData).map((state) => {
      return(
        <div key={Object.keys(resorts.resortData).indexOf(state)} className="state-list" >
          <h5>
            {states[state]}
          </h5>
          <div className="grid-x grid-margin-x">
            <ResortsList setHoveredResort={setHoveredResort} resortData={resorts.resortData[`${state}`]} />
          </div>
        </div>
      )
    })
  }
  
  return(
    <div className="grid-x">
      <div className="cell small-8">
        {resortStates}
      </div>
      <div className="cell small-4 index-map">
        <Map resort={hoveredResort}/>
      </div>
    </div>
  )

}

export default IndexContainer