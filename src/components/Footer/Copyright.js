import classes from "./Copyright.module.css"
const Copyright = (props) => {
  return (
    <footer className={classes.footer}>
      <div className={classes["container"]}>
        <div className={classes["footerc"]}>
          <h3>Copyright © 2023. All rights are reserved</h3>
          <div className={classes["footerc__socials"]}>
            <a
              aria-label="linkedin"
              target="_blank"
              rel="noreferrer"
              href="https://linkedin.com/in/sanketkoli007"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              aria-label="github"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Sanket-rgb"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Copyright
