import React from "react"

import classes from "../Navigation.module.css"
const About = (props) => {
  const changeNavSelector = () => {
    props.onSelectNav("ABOUT")
  }
  return (
    <div className={classes.content} onClick={changeNavSelector}>
      ABOUT
    </div>
  )
}

export default About
