import React from "react"

import classes from "../Navigation.module.css"
const Work = (props) => {
  const changeNavSelector = () => {
    props.onSelectNav("WORK")
  }
  return (
    <div className={classes.content} onClick={changeNavSelector}>
      WORK
    </div>
  )
}

export default Work
