import React from "react"
import { Link } from "react-router-dom"

const ResortsList = (props) => {

  const resortList = props.resortData.map((resort) => {

    const onHover = () => {
      props.setHoveredResort({...resort})
    }

    return (
      <Link to={`/resorts/${resort.id}`} key={resort.id} className="cell small-4 button" onMouseOver={onHover} >
        <h5>{resort.name}</h5>
        <p>{resort.city}, {resort.state}</p>
      </Link>
    )
  })

  return (
    resortList
  )
}

export default ResortsList