import React from "react"

import classes from "../Navigation.module.css"
const About = (props) => {
  // const activeItem = props.selectedNav === "ABOUT" ? classes.selected : ""

  const changeNavSelector = () => {
    props.onSelectNav("ABOUT")
  }
  return (
    <div className={classes["nav-item-wrapper"]}>
      <div className={`${classes.content}`} onClick={changeNavSelector}>
        ABOUT
      </div>
      {props.selectedNav === "ABOUT" && (
        <div className={classes["dash-line"]}></div>
      )}
    </div>
  )
}

export default About
