import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FetchUsers from "../services/FetchUsers";
import Map from "./Map";

const ProfileContainer = () => {

  const [user, getUser] = useState({})
  const [hoveredResort, setHoveredResort] = useState({})

  const fetchUser = async () => {
    const userData = await FetchUsers.getUser()
    getUser({
      ...user,
      userData
    })
  }
  
  useEffect(() => {
    fetchUser()
  }, [])
  
  let userInfo = ""
  let resortLinks = ""
  let resortList = ""
  if (user.userData) {
    userInfo = (
      <h5>Email: {user.userData.user.email}</h5>
      )

      resortList = user.userData.user.resorts
      resortLinks = resortList.map((resort) => {

        const selectedResort = resort
        const onHover = () => {
          setHoveredResort({...selectedResort})
        }

        return (
          <li key={resort.id}>
            <Link to={`/resorts/${resort.id}`} onMouseOver={onHover} >{resort.name}</Link>
          </li>
        )
    })
  }

  return (
    <div className="profile">
      {userInfo}
      <div className="grid-x grid-margin-x">
        <Map resorts={resortList} hoveredResort={hoveredResort} />
        <div className="resorts callout cell small-6">
          <h5>
            Resort List
          </h5>
          {resortLinks}
        </div>
      </div>
    </div>
  )

}

export default ProfileContainer