import Project from "./Projects/Project"

import classes from "./ProjectInfo.module.css"
const ProjectInfo = (props) => {
  const tools = [
    ["LocalStorage", "Supabase", "SCSS", "Stripe"],
    ["Next.js", "CSS Modules", "JavaScript"],
    ["SCSS", "TypeScript", "Vite", "Supabase"],
    ["Human Computer Interaction", "Figma", "Slack"],
  ]

  return (
    <section id={props.id} className={classes["project"]}>
      <div className={classes["container"]}>
        <div className={classes["project-content"]}>
          <p>portfolio</p>
          <h3>Each project is a unique piece of development 🧩</h3>
          <div className={classes["projects-grid"]}>
            <Project
              flexdirection="row"
              demo={"https://shop-estclicks.netlify.app/"}
              github={"https://github.com/Sanket-rgb/shop-estclicks"}
              image={"/Images/Work/estclicksshop.jpeg"}
              name={"SHOP ESTCLICKS 📷"}
              description={
                "Designed and developed an e-commerce website allowing users to purchase digital photographs."
              }
              tools={tools[0]}
            />
            <Project
              flexdirection="row-reverse"
              demo={"https://sk-car-rental.netlify.app/"}
              github={"https://github.com/Sanket-rgb/car-rental"}
              image={"/Images/Work/car-rental.jpeg"}
              name={"CAR RENTAL 🚗"}
              description={
                "Developed an intuitive car rental application that highlights an extensive selection of cars, along with their pickup points and rental dates, empowering users to make informed decisions."
              }
              tools={tools[1]}
            />
            <Project
              flexdirection="row"
              demo={
                "https://radar-web-client-git-delete-station-popup-teamsearchanddestroy.vercel.app"
              }
              github=""
              image={"/Images/Work/PdP.jpeg"}
              name={"DRONE DETECTION SYSTEM 🛸"}
              description={
                "Collaborating with SAAB organisation and Aalto Design Factory, Finland to create a user interface for drone detection system."
              }
              tools={tools[2]}
            />
            <Project
              flexdirection="row-reverse"
              demo={
                "https://www.figma.com/file/5UE5csz6NSUgxGVXtd7kPN/To-mo-To?node-id=0-1&t=ZgmFirFvYkxpNcu8-0"
              }
              github=""
              image={"/Images/Work/ToMoTo.jpeg"}
              name={"TO-MO-TO 👶🏼"}
              description={
                "Transformed a low-fidelity design into a high-fidelity design to develop a language learning application prototype for toddlers and conducted usability testing."
              }
              tools={tools[3]}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectInfo
