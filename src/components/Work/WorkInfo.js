import React from "react"

import classes from "./WorkInfo.module.css"

import Collab from "./Company/Collab"
import Frshr from "./Company/Frshr"
import Project from "./Projects/Project"
const WorkInfo = (props) => {
  return (
    <div id={props.id} className={classes.wrapper}>
      <div className={classes["grid-container"]}>
        <div className={classes["heading-title"]}>
          <p>work experience</p>
          <h3>Insights and Lessons Learned 💡</h3>
        </div>
        <Collab classes={classes} />
        <Frshr classes={classes} />
      </div>
    </div>
  )
}

export default WorkInfo
