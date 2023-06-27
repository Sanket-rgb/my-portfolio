import Project from "./Projects/Project"
import { projects } from "@/Utils/ProjectDetails"
import classes from "./ProjectInfo.module.css"
const ProjectInfo = (props) => {
  return (
    <section id={props.id} className={classes["project"]}>
      <div className={classes["container"]}>
        <div className={classes["project-content"]}>
          <p>portfolio</p>
          <h3>Each project is a unique piece of development 🧩</h3>
          <div className={classes["projects-grid"]}>
            {projects.map((project, idx) => (
              <Project
                key={idx}
                flexdirection={project.flexDirection}
                demo={project.demo}
                github={project.github}
                image={project.image}
                name={project.name}
                description={project.description}
                tools={project.technologies}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectInfo
