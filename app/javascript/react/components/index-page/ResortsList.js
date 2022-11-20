import React from "react"
import { Link } from "react-router-dom"

const ResortsList = (props) => {

  const resortList = props.resortData.map((resort) => {
    return (
      <li key={resort.id}>
        {<Link to={`/resorts/${resort.id}`} >{resort.name}</Link>}
      </li>
    )
  })

  return (
    resortList
  )
}

export default ResortsList