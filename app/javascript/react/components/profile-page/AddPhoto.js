import React, { useState } from "react";
import Dropzone from 'react-dropzone'

const AddPhoto = () => {

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
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        throw new Error(errorMessage)
      }
    } catch (error) {
      console.error(`Error in Fetch: ${error.message}`)
    }
  }

  return (
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
  )

}

export default AddPhoto