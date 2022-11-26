import React, { useState } from "react";
import { Link } from "react-router-dom";

const FavoriteButton = (props) => {

  const [favorite, setFavorite] = useState(0)
  
  let favoriteValue = props.favorite
  if (favorite > 0) {
    favoriteValue = favorite 
  }

  const doSomething = async () => {
    const response = await fetch("/api/v1/users", {
      credentials: "same-origin",
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        resort: props.id,
        favorite: favoriteValue
      })
    })
    const favoriteResponse = await response.json()
    setFavorite(favoriteResponse.favorite)
  }
  
  if (favoriteValue > 0) {
    if (favoriteValue == 1) {
      return (
        <input className="button" type="submit" value="Favorite" onClick={doSomething} />
        )
    } else {
      return (
        <input className="button" type="submit" value="Unfavorite" onClick={doSomething} />
      )
    }
  } else {
    return (
    <a href="/users/sign_in" >
      <input className="button" type="submit" value="Sign in to Favorite" />
    </a>
    )
  }
}

export default FavoriteButton