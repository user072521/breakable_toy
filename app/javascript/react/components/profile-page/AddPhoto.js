import React, { useState } from "react";
import Dropzone from 'react-dropzone'

const AddPhoto = () => {

  const [user, setUser] = useState({})
  const [newPicFormData, setPicFormData] = useState({
    name: "",
    image: ""
  })

  const handleFileUpload = (acceptedFiles) => {
    setPicFormData({
      ...newPicFormData,
      image: acceptedFiles[0]
    })
  }

  const addPic = async (event) => {
    event.preventDefault()
    let body = new FormData()
    body.append("name", newPicFormData.name)
    body.append("profile_photo", newPicFormData.image)
    try {
      const response = await fetch("/api/v1/picture", {
        method: "POST",
        credentials: "same-origin",
        headers: {
          "Accept": "image/jpeg"
        },
        body: body
      })
      const userData = await response.json()
      setUser({
        ...user,
        userData
      })
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
    } catch (error) {
      console.error(`Error in Fetch: ${error.message}`)
    }
  }
  
  let profilePhoto = ''
  if (user.userData) {
    debugger
    profilePhoto = (
      <img src={user.userData.user.profile_photo.url} />
    )
  }

  return (
    <div>
      <form className="callout" onSubmit={addPic}>

        <Dropzone onDrop={handleFileUpload}>
          {({getRootProps, getInputProps}) => (
            <section>
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
              </div>
            </section>
          )}
        </Dropzone>

        <input className="button" type="submit" value="Submit"/>
      </form>
      {profilePhoto}
    </div>
  )

}

export default AddPhoto