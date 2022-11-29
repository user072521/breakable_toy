import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FetchUsers from "../services/FetchUsers";

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
  let resorts = ""
  if (user.userData) {
    userInfo = (
      <h5>Email: {user.userData.user.email}</h5>
    )
    resorts = user.userData.user.resorts.map((resort) => {
      return (
        <li key={resort.id}>
          {<Link to={`/resorts/${resort.id}`} >{resort.name}</Link>}
        </li>
      )
    })
  }

  return (
    <div className="profile">
      {userInfo}
      <div className="resorts callout">
        <h5>
          Resort List
        </h5>
        {resorts}
      </div>
    </div>
  )

}

export default ProfileContainer