import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLink } from "@fortawesome/free-solid-svg-icons"
import Image from "next/image"
import Link from "next/link"

import classes from "./Project.module.css"
const Project = (props) => {
  return (
    <div className={`${classes["container"]} ${classes[props.flexdirection]}`}>
      <div className={classes["pro__img"]}>
        <Image src={props.image} fill alt="project-img"></Image>
      </div>
      <div className={classes["pro__text"]}>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <div className={classes["stack"]}>
          {props.tools.map((tool) => {
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
            <i class="fa-solid fa-arrow-up-right-from-square link-icon"></i>
          </a>
        </div>
      </div>
    </div>
  )
  // return (
  //   <div className={props.classes["card-container"]}>
  //     <div className={props.classes["card-inner-container"]}>
  //       <Link
  //         target="_blank"
  //         href={props.href}
  //         className={props.classes["image-container"]}
  //       >
  //         <Image
  //           className={props.classes.image}
  //           src={props.image}
  //           alt={props.name}
  //           fill
  //         />
  //       </Link>
  //       <div className={props.classes["card-description"]}>
  //         <div className={props.classes.title}>
  //           <h2>{props.name}</h2>
  //         </div>
  //         <p>{props.description}</p>
  //         <div className={props.classes.skills}>
  //           {props.tools.map((tool) => {
  //             return (
  //               <div
  //                 key={Math.random().toString()}
  //                 className={props.classes["skill-name"]}
  //               >
  //                 {tool}
  //               </div>
  //             )
  //           })}
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // )
}

export default Project
