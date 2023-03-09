import React from "react"

import Image from "next/image"
import myself from "../../../public/Images/Photographs/Myself.jpeg"
import classes from "./AboutInfo.module.css"

const AboutInfo = (props) => {
  return (
    <div className={classes["grid-container"]}>
      <div className={classes["image-container"]}>
        <Image
          fill
          alt="self"
          src={myself}
          className={classes.image}
          placeholder="blur"
          sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
        />
      </div>
      <div className={classes["info-details"]}>
        <h1>Sanket Koli | Software Engineer, Photographer</h1>
        <p>
          Experienced Frontend Developer with 2 Years of Expertise in Building
          User-Friendly Web/Mobile Interfaces.
        </p>
        <p>
          I possess a proven track record of spearheading front-end development
          initiatives at a thriving startup, driving organizational growth and
          success through effective leadership and seamless client interactions.
        </p>
        <p>
          Adept in building visually appealing and highly functional user
          interfaces, with a strong focus on user experience and accessibility.
        </p>
        <h1>Skills</h1>

        <ul>
          <li>Web/Mobile Technology: HTML, CSS, ReactJS, Flutter</li>
        </ul>
        <ul>
          <li>Programming languages: Python, JavaScript, C</li>
        </ul>
        <br />
        <h1>Education</h1>
        <ul>
          <li>Masters in Computer Science, New York City</li>
        </ul>
        <ul>
          <li>Diploma in Advanced Computing, Mumbai</li>
        </ul>
        <ul>
          <li>Bachelors in Instrumentation Engineering, Mumbai</li>
        </ul>
      </div>
    </div>
  )
}

export default AboutInfo
