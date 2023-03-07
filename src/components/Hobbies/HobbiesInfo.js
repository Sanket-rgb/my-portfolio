import React, { useState } from "react"

import { images } from "@/Utils/Photos"
import classes from "./HobbiesInfo.module.css"
import GridImage from "./GridImage"
const HobbiesInfo = (props) => {
  return (
    <div className={classes.container}>
      {images.map((image, index) => (
        <div className={classes.imageContainer} key={index}>
          <GridImage
            className={classes.image}
            id={image.id}
            path={image.path}
            category={image.category}
            description={image.description}
            location={image.location}
          />
        </div>
      ))}
    </div>
  )
}

export default HobbiesInfo
