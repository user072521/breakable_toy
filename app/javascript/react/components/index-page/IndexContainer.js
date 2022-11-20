import React, { useEffect, useState } from "react"
import ResortsList from "./ResortsList"
import FetchResorts from "../services/FetchResorts"

const IndexContainer = (props) => {

  const [resorts, setResorts] = useState({})

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
        <div key={Object.keys(resorts.resortData).indexOf(state)} className="index callout">
          {state}
          <ResortsList resortData={resorts.resortData[`${state}`]} />
        </div>
      )
    })
  }
  
  return(
    resortStates
  )

}

export default IndexContainer