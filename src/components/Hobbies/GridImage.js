import React, { useState } from "react"

import Image from "next/image"
import ImageDescription from "./ImageDescription"
import classes from "./HobbiesInfo.module.css"
const GridImage = (props) => {
  const [imageVisibility, setImageVisibility] = useState(true)

  const imageNotVisibile = () => {
    setImageVisibility(false)
  }

  const imageVisible = () => {
    setImageVisibility(true)
  }
  return (
    <React.Fragment>
      {imageVisibility && (
        <Image
          onMouseOver={imageNotVisibile}
          className={classes.image}
          alt={props.id}
          src={props.path}
          fill
          sizes="(max-width: 768px) 100vw,
    (max-width: 1200px) 50vw,
    33vw"
        />
      )}
      {!imageVisibility && (
        <ImageDescription
          onMouseOver={imageNotVisibile}
          onMouseOut={imageVisible}
          description={props.description}
          location={props.location}
        />
      )}
    </React.Fragment>
  )
}

export default GridImage
