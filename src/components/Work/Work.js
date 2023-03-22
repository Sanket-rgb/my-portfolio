import React from "react";

import classes from "../Navigation.module.css";
const Work = (props) => {
  // const activeItem = props.selectedNav === "WORK" ? classes.selected : ""

  const changeNavSelector = () => {
    props.onSelectNav("WORK");
  };
  return (
    <div className={classes["nav-item-wrapper"]}>
      <div className={`${classes.content} `} onClick={changeNavSelector}>
        WORK
      </div>
      {props.selectedNav === "WORK" && (
        <div className={classes["dash-line"]}></div>
      )}
    </div>
  );
};

export default Work;
