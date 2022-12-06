import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FetchUsers from "../services/FetchUsers";
import Map from "./Map";

const ProfileContainer = () => {

  const [user, getUser] = useState({})

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
      return (
        <li key={resort.id}>
          {<Link to={`/resort/${resort.id}`} >{resort.name}</Link>}
        </li>
      )
    })
  }

  return (
    <div className="profile">
      {userInfo}
      <Map resorts={resortList} />
      <div className="resorts callout">
        <h5>
          Resort List
        </h5>
        {resortLinks}
      </div>
    </div>
  )

}

export default ProfileContainer