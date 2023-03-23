import React from "react";

import classes from "../Navigation.module.css";
const About = (props) => {
  const className = props.selectedNav === "ABOUT" ? classes["mobile-menu"] : "";

  const changeNavSelector = () => {
    props.onSelectNav("ABOUT");
  };
  return (
    <div className={`${className} ${classes["nav-item-wrapper"]} `}>
      <div className={`${classes.content}`} onClick={changeNavSelector}>
        ABOUT
      </div>
      {props.selectedNav === "ABOUT" && (
        <div className={classes["dash-line"]}></div>
      )}
    </div>
  );
};

export default About;
