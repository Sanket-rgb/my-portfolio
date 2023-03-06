import React from "react"

import { images } from "@/Utils/Photos"
import Image from "next/image"
import classes from "./HobbiesInfo.module.css"
const HobbiesInfo = (props) => {
  return (
    <div className={classes.container}>
      {/* {images.map((image) => (
        <Image
          key={image.id}
          className={classes.image}
          alt={image.id}
          src={image.path}
          width="0"
          height="0"
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      ))} */}
      {images.map((image) => (
        <div className={classes.imageContainer} key={image.id}>
          <Image
            className={classes.image}
            alt={image.id}
            src={image.path}
            fill
            // width="0"
            // height="0"
            // sizes="100vw"
            // style={{ width: "100%", height: "auto" }}
          />
        </div>
      ))}
    </div>
  )
}

export default HobbiesInfo
