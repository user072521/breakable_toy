import React from "react"

const ResortsList = (props) => {

  const resortList = props.resortData.map((resort) => {
    return (
      <li key={resort.id}>
        {resort.name}
      </li>
    )
  })

  return (
    resortList
  )
}

export default ResortsList