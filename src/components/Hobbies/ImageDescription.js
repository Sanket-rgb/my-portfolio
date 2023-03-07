import React from "react"

import classes from "./ImageDescription.module.css"
const ImageDescription = (props) => {
  return (
    <div
      className={classes.imageDescriptionContainer}
      onMouseOver={props.onMouseOver}
      onMouseOut={props.onMouseOut}
    >
      <p onMouseOver={props.onMouseOver} onMouseOut={props.onMouseOut}>
        {props.description}
      </p>
      <div
        className={classes["dash-line"]}
        onMouseOver={props.onMouseOver}
        onMouseOut={props.onMouseOut}
      ></div>
      <p onMouseOver={props.onMouseOver} onMouseOut={props.onMouseOut}>
        {props.location}
      </p>
    </div>
  )
}

export default ImageDescription
