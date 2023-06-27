import Image from "next/image"
import Link from "next/link"

import classes from "./Project.module.css"
const Project = (props) => {
  return (
    <div className={`${classes["container"]} ${classes[props.flexdirection]}`}>
      <Link href={props.demo} target="_blank" className={classes["pro__img"]}>
        <Image src={props.image} fill alt="project-img"></Image>
      </Link>
      <div className={classes["pro__text"]}>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <div className={classes["stack"]}>
          {props.tools?.map((tool) => {
            return <p key={Math.random().toString()}>{tool}</p>
          })}
        </div>
        <div className={classes["links"]}>
          {props.github !== "" && (
            <a target="_blank" href={props.github} rel="noreferrer">
              Code <i className="fa-brands fa-github"></i>
            </a>
          )}

          <a target="_blank" href={props.demo} rel="noreferrer">
            Live Demo
            <i className="fa-solid fa-arrow-up-right-from-square link-icon"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Project
