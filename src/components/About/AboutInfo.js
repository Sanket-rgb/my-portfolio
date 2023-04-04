import React from "react"

import Image from "next/image"
import myself from "../../../public/Images/logos/dp.jpeg"
import classes from "./AboutInfo.module.css"
import linkedin from "../../../public/Images/Work/linkedin.svg"
import github from "../../../public/Images/Work/github.svg"
import html from "../../../public/Images/logos/html.svg"
import css from "../../../public/Images/logos/css.svg"
import js from "../../../public/Images/logos/js.svg"
import react from "../../../public/Images/logos/react.svg"
import flutter from "../../../public/Images/logos/flutter.svg"
import next from "../../../public/Images/logos/Next.svg"
import scss from "../../../public/Images/logos/scss.svg"

import style from "../Footer/SocialMediaLinks.module.css"
import Link from "next/link"
const AboutInfo = (props) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes["about-me"]}>
          <div className={classes.description}>
            <h1>
              Front-End Software Developer{" "}
              <span>
                <Image
                  height={50}
                  width={50}
                  alt="waving-hand"
                  src="/Images/logos/wave.png"
                ></Image>
              </span>
            </h1>
            <p>
              Hi, I{"'"}m Sanket Koli. A passionate Front-end developer based in
              Edmonds, WA. 📍
            </p>
            <div className={classes["social-media-container"]}>
              <a href="https://linkedin.com/in/sanketkoli007" target="_blank">
                <Image
                  height={20}
                  width={20}
                  alt="linkedin"
                  src={linkedin}
                ></Image>
              </a>

              <a href="https://github.com/Sanket-rgb" target="_blank">
                <Image height={20} width={20} alt="github" src={github}></Image>
              </a>
            </div>
          </div>
          <div className={classes["image-container"]}>
            <Image
              className={classes.image}
              src={myself}
              alt="myself"
              fill
            ></Image>
          </div>
        </div>
        <div className={classes["tech-stack"]}>
          <p>Tech Stack</p>
          <div className={classes.logos}>
            <ul>
              <li>
                <Image src={html} alt="html" height={34} width={34}></Image>
              </li>
              <li>
                <Image src={css} alt="css" height={34} width={34}></Image>
              </li>
              <li>
                <Image src={js} alt="js" height={34} width={34}></Image>
              </li>
              <li>
                <Image src={react} alt="react" height={34} width={34}></Image>
              </li>
              <li>
                <Image src={next} alt="next" height={34} width={34}></Image>
              </li>
              <li>
                <Image src={scss} alt="scss" height={34} width={34}></Image>
              </li>
              <li>
                <Image
                  src={flutter}
                  alt="flutter"
                  height={34}
                  width={34}
                ></Image>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutInfo
