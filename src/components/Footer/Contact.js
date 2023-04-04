import classes from "./Contact.module.css"
const Contact = (props) => {
  return (
    <section id={props.id} className={classes.section}>
      <div className={classes.container}>
        <div className={classes["contact__content"]}>
          <div className={classes["contact__title"]}>
            <p>contact</p>
            <h3>Don{"'"}t be shy! Hit me up! 👇</h3>
          </div>
          <div className={classes["contact__icons"]}>
            <div className={classes["contact__icon-box"]}>
              <span>
                <i class="fa-solid fa-map-location-dot"></i>
              </span>
              <div className={classes["contact__info"]}>
                <h3>Location</h3>
                <p>Edmonds, Washington</p>
              </div>
            </div>
            <div className={classes["contact__icon-box"]}>
              <span>
                <i class="fa-solid fa-envelope-open-text"></i>
              </span>
              <div className={classes["contact__info"]}>
                <h3>Mail</h3>
                <a href="mailto:sanketdeepak.koli@pace.edu">
                  sanketdeepak.koli@pace.edu
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
