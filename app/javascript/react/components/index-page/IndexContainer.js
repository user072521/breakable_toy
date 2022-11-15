import React, { useEffect, useState } from "react"
import ResortsList from "./ResortsList"

const IndexContainer = (props) => {

  const [resorts, setResorts] = useState({})

  const getResorts = async () => {
    try {
      const response = await fetch("/api/v1/resorts")
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
      const resortData = await response.json()
      setResorts({
        ...resorts,
        resortData
      })
    } catch (error) {
      console.error(`Error in Fetch: ${error.message}`)
    }
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