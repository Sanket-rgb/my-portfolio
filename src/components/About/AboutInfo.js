import React from "react"

import Image from "next/image"
import myself from "../../../public/Images/Photographs/Myself.jpeg"
import Card from "../UI/Card"
import classes from "./AboutInfo.module.css"

const AboutInfo = (props) => {
  return (
    <div className={classes.layout}>
      <div className={classes.imageContainer}>
        <Image
          fill
          alt="self"
          src={myself}
          className={classes.image}
          placeholder="blur"
        />
      </div>

      <div className={classes.content}>
        <div>
          <h1>Sanket Koli | Photographer - Software Engineer</h1>
          <p className={classes.p}>
            I am a graduate student in computer science with a Masters degree
            from Pace University and a Postgraduate Diploma in Advanced
            Computing from MET IIT, CDAC.I am a graduate student in computer
            science with a Masters degree from Pace University and a
            Postgraduate Diploma in Advanced Computing from MET IIT, CDAC.
          </p>
        </div>
        <h1>Education</h1>
        <div>
          <p className={classes.p}>
            MS in Computer Science at Pace University, NYC
          </p>
          <p className={classes.p}>
            Diploma in Advanced Computing at CDAC, MUMBAI
          </p>
          <p className={classes.p}>
            BE in Instrumentation Engineering, Mumbai University
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutInfo
