import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLink } from "@fortawesome/free-solid-svg-icons"
import Image from "next/image"
import Link from "next/link"

const Project = (props) => {
  return (
    <div className={props.classes["card-container"]}>
      <div className={props.classes["card-inner-container"]}>
        <Link
          target="_blank"
          href={props.href}
          className={props.classes["image-container"]}
        >
          <Image
            className={props.classes.image}
            src={props.image}
            alt={props.name}
            fill
          />
        </Link>
        <div className={props.classes["card-description"]}>
          <div className={props.classes.title}>
            <h2>{props.name}</h2>
            {/* <div className={props.classes["links-container"]}>
              <a
                className={props.classes.link}
                target="_blank"
                href="https://github.com/stefvndev/car-rental"
                rel="noreferrer"
              >
                Code &nbsp;
                <i style={{ fontSize: "25px" }} class="fa-brands fa-github"></i>
              </a>
              <a
                className={props.classes.link}
                target="_blank"
                href="https://github.com/stefvndev/car-rental"
                rel="noreferrer"
              >
                Live Demo &nbsp;
                <i style={{ fontSize: "25px" }} class="fa-brands fa-github"></i>
              </a>
            </div> */}
          </div>

          <p>{props.description}</p>
          <div className={props.classes.skills}>
            {props.tools.map((tool) => {
              return (
                <div
                  key={Math.random().toString()}
                  className={props.classes["skill-name"]}
                >
                  {tool}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
