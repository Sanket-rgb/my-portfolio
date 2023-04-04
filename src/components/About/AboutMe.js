import Image from "next/image"
import classes from "./AboutMe.module.css"
const AboutMe = (props) => {
  return (
    <section id={props.id} className={classes.section}>
      <div className={classes.container}>
        <div className={classes["about-content"]}>
          <div className={classes["image-side"]}>
            <Image
              className={classes["work-emoji"]}
              alt="work-emoji"
              src="/Images/logos/aboutme.png"
              width={60}
              height={60}
            ></Image>
            <Image
              className={classes["image-side__main-image"]}
              alt="desk"
              src="/Images/logos/desk.webp"
              width={410}
              height={350}
            ></Image>
            <span className={classes.rotate}>
              <Image
                alt="desk"
                src="/Images/logos/circle.svg"
                fill
                // width={410}
                // height={350}
              ></Image>
            </span>
          </div>
          <div className={classes["text-side"]}>
            <h4>About me</h4>
            <h3>
              A dedicated Front-end Developer <br /> based in Edmonds,
              Washington 📍
            </h3>
            <p>
              Experienced Frontend Developer with 2 Years of Expertise in
              Building User-Friendly Web and Mobile applications.
            </p>
            <p>
              I possess a proven track record of spearheading front-end
              development initiatives at a thriving startup, driving
              organizational growth and success through effective leadership and
              seamless client interactions. Adept in building visually appealing
              and highly functional user interfaces, with a strong focus on user
              experience and accessibility.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
