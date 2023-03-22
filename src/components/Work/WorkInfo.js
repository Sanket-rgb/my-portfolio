import React from "react";

import classes from "./WorkInfo.module.css";
import Collab from "../../../public/Images/Work/Collab.jpg";
import Frshr from "../../../public/Images/Work/Frshr.jpg";
import PdP from "../../../public/Images/Work/PdP.jpeg";
import Quote from "../../../public/Images/Work/QuoteGallery.jpeg";
import Image from "next/image";
import Link from "next/link";
const WorkInfo = (props) => {
  return (
    <div className={classes["grid-container"]}>
      <div className={classes["heading-title"]}>
        <h2>Work Experience</h2>
      </div>
      <div className={classes["card-container"]}>
        <div className={classes["card-inner-container"]}>
          <div className={classes["image-container"]}>
            <Image
              className={classes.image}
              src={Collab}
              alt="company-name"
              fill
            />
          </div>
          <div className={classes["card-description"]}>
            <h2>Collab Inc (May 2022 - Aug 2022)</h2>
            <h4>Engineering Intern</h4>
            <p>
              I joined Collab and began working on their internal projects to
              implement new features and successfully deployed them to the
              production using technologies such as ReactJS, NextJS,
              PlanetScale, Vercel, Heroku, GitHub Actions etc.
            </p>
          </div>
        </div>
      </div>
      <div className={classes["card-container"]}>
        <div className={classes["card-inner-container"]}>
          <div className={classes["image-container"]}>
            <Image
              className={classes.image}
              src={Frshr}
              alt="company-name"
              fill
            />
          </div>
          <div className={classes["card-description"]}>
            <h2>Frshr Technologies (June 2020- Aug 2021)</h2>
            <h4>Software Developer</h4>
            <p>
              During my tenure with Frshr Technologies, my responsibilities have
              included interacting with our clients on weekly basis to
              understand their requirements and expectations and plan and
              organize work to successfully hand over the deliverables to the
              client.
            </p>
          </div>
        </div>
      </div>
      <div className={classes["heading-title"]}>
        <h2>Projects</h2>
      </div>
      <div className={classes["card-container"]}>
        <div className={classes["card-inner-container"]}>
          <Link
            target="_blank"
            href="https://radar-web-client-git-delete-station-popup-teamsearchanddestroy.vercel.app"
            className={classes["image-container"]}
          >
            <Image
              className={classes.image}
              src={PdP}
              alt="company-name"
              fill
            />
          </Link>
          <div className={classes["card-description"]}>
            <h2>Drone Detection System (Present)</h2>
            <p>
              Collaborating with SAAB organisation and Aalto Design Factory,
              Finland to create a user interface for drone detection system.
            </p>
          </div>
        </div>
      </div>
      <div className={classes["card-container"]}>
        <div className={classes["card-inner-container"]}>
          <div className={classes["image-container"]}>
            <Image
              className={classes.image}
              src={Quote}
              alt="company-name"
              fill
            />
          </div>
          <div className={classes["card-description"]}>
            <h2>Quotes Gallery</h2>
            <p>
              Created a quote generator web application using Ionic and Cordova
              frameworks.
            </p>
            {/* https://quotegallery-5bce8.web.app/ */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkInfo;
