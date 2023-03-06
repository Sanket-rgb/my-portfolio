import React from "react"

import classes from "../Navigation.module.css"
const Hobbies = (props) => {
  const changeNavSelector = () => {
    props.onSelectNav("HOBBIES")
  }
  return (
    <div className={classes.content} onClick={changeNavSelector}>
      HOBBIES
    </div>
  )
}

export default Hobbies
