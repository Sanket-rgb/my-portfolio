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
        <br />
        <h1>Contact</h1>
        <div className={classes["social-media-links-wrapper"]}>
          <a href="mailto:sanketdeepak.koli@pace.edu">
            <svg
              fill="#ffffff"
              viewBox="-5.52 -5.52 35.04 35.04"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M22,5V9L12,13,2,9V5A1,1,0,0,1,3,4H21A1,1,0,0,1,22,5ZM2,11.154V19a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V11.154l-10,4Z"></path>
              </g>
            </svg>
          </a>
          <a href="tel:+15518887995">
            <svg
              viewBox="-2.4 -2.4 28.80 28.80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.0004 8C20.3886 8.00052 21.7129 10.6594 21.8897 11.7802C21.9329 11.9459 22.6286 15.6383 19.8986 15.9247C13.1064 16.6189 17.7759 11.9168 11.9997 12.0954C6.22345 12.274 10.8928 16.6189 4.10194 15.925C1.37129 15.638 2.06709 11.9456 2.11033 11.7813C2.28654 10.6598 3.61158 8.00016 12.0004 8Z"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default AboutInfo
