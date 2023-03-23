import React from "react";

import classes from "./WorkInfo.module.css";
import Collab from "../../../public/Images/Work/Collab.jpeg";
import Frshr from "../../../public/Images/Work/Frshr.jpg";
import PdP from "../../../public/Images/Work/PdP.jpeg";
import ToMoTo from "../../../public/Images/Work/ToMoTo.jpeg";
import estclicks from "../../../public/Images/Work/estclicksshop.jpeg";
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
              enhance existing features, implement new features and increase
              performance of the web applications.
            </p>
            {/* successfully deployed them to
              production NextJS, Vercel, PlanetScale, Heroku, GitHub Actions, Cypress etc.*/}
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
            href="https://shop-estclicks.netlify.app/"
            className={classes["image-container"]}
          >
            <Image
              className={classes.image}
              src={estclicks}
              alt="company-name"
              fill
            />
          </Link>
          <div className={classes["card-description"]}>
            <h2>Shop-estclicks</h2>
            <p>
              Designed and developed an e-commerce shop for selling digital
              photographs.
            </p>
            {/* https://quotegallery-5bce8.web.app/ */}
          </div>
        </div>
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
            <h2>Drone Detection System</h2>
            <p>
              Collaborating with SAAB organisation and Aalto Design Factory,
              Finland to create a user interface for drone detection system.
            </p>
          </div>
        </div>
      </div>
      <div className={classes["card-container"]}>
        <div className={classes["card-inner-container"]}>
          <Link
            target="_blank"
            href="https://www.figma.com/file/5UE5csz6NSUgxGVXtd7kPN/To-mo-To?node-id=0-1&t=ZgmFirFvYkxpNcu8-0"
            className={classes["image-container"]}
          >
            <Image
              className={classes.image}
              src={ToMoTo}
              alt="company-name"
              fill
            />
          </Link>
          <div className={classes["card-description"]}>
            <h2>To-Mo-To</h2>
            <p>
              Transformed a low-fidelity design into a high-fidelity design to
              develop a language learning application prototype for toddlers and
              conducted usability testing.
            </p>
            {/* https://quotegallery-5bce8.web.app/ */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkInfo;
