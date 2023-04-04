import React from "react"

import classes from "./WorkInfo.module.css"

import Collab from "./Company/Collab"
import Frshr from "./Company/Frshr"
import Project from "./Projects/Project"
const WorkInfo = (props) => {
  const tools = [
    ["HTML", "CSS Modules", "JavaScript", "Next.js", "Vercel", "localStorage"],
    ["HTML", "CSS Modules", "JavaScript", "Next.js", "Vercel"],
    ["SCSS", "TypeScript", "React.js", "Vite.js", "env", "Supabase", "Leaflet"],
    ["Figma", "Slack", "Human Computer Interaction"],
  ]

  return (
    <div id={props.id} className={classes.wrapper}>
      <div className={classes["grid-container"]}>
        <div className={classes["heading-title"]}>
          <p>work experience</p>
          <h3>Exploring Work Experience: Insights and Lessons Learned 💡</h3>
        </div>
        <Collab classes={classes} />
        <Frshr classes={classes} />
        <div className={classes["heading-title"]}>
          <p>projects</p>
          <h3>Each project is a unique piece of development 🧩</h3>
        </div>
        <Project
          classes={classes}
          href={"https://shop-estclicks.netlify.app/"}
          image={"/Images/Work/estclicksshop.jpeg"}
          name={"SHOP ESTCLICKS (2023)"}
          description={
            "Designed and developed an e-commerce website for showcasing digital photographs and giving an ability to add or remove items from the cart."
          }
          tools={tools[0]}
        />
        <Project
          classes={classes}
          href={"https://sk-car-rental.netlify.app/"}
          image={"/Images/Work/car-rental.jpeg"}
          name={"CAR RENTAL (2023)"}
          description={
            "Developed an intuitive car rental application that highlights an extensive selection of cars, along with their pickup points and rental dates, empowering users to make informed decisions."
          }
          tools={tools[1]}
        />
        <Project
          classes={classes}
          href={
            "https://radar-web-client-git-delete-station-popup-teamsearchanddestroy.vercel.app"
          }
          image={"/Images/Work/PdP.jpeg"}
          name={"DRONE DETECTION SYSTEM (2022 - Present)"}
          description={
            "Collaborating with SAAB organisation and Aalto Design Factory, Finland to create a user interface for drone detection system."
          }
          tools={tools[2]}
        />
        <Project
          classes={classes}
          href={
            "https://www.figma.com/file/5UE5csz6NSUgxGVXtd7kPN/To-mo-To?node-id=0-1&t=ZgmFirFvYkxpNcu8-0"
          }
          image={"/Images/Work/ToMoTo.jpeg"}
          name={"TO-MO-TO (2022)"}
          description={
            "Transformed a low-fidelity design into a high-fidelity design to develop a language learning application prototype for toddlers and conducted usability testing."
          }
          tools={tools[3]}
        />
      </div>
    </div>
  )
}

export default WorkInfo
