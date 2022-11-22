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
      <p>Email: {user.userData.user.email}</p>
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
    <div>
      {userInfo}
      {resorts}
    </div>
  )

}

export default ProfileContainer