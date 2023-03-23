import React from "react";

import classes from "../Navigation.module.css";
const Hobbies = (props) => {
  const className =
    props.selectedNav === "HOBBIES" ? classes["mobile-menu"] : "";

  const changeNavSelector = () => {
    props.onSelectNav("HOBBIES");
  };
  return (
    <div className={`${className} ${classes["nav-item-wrapper"]} `}>
      <div className={`${classes.content} `} onClick={changeNavSelector}>
        HOBBIES
      </div>
      {props.selectedNav === "HOBBIES" && (
        <div className={classes["dash-line"]}></div>
      )}
    </div>
  );
};

export default Hobbies;
