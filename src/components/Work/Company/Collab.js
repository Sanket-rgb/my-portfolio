import Image from "next/image"
import Link from "next/link"
import CollabImage from "../../../../public/Images/Work/Collab.jpeg"

const Collab = (props) => {
  return (
    <div className={props.classes["card-container"]}>
      <Link
        href="/WorkInfo/CollabInc"
        className={props.classes["card-inner-container"]}
      >
        <div className={props.classes["image-container"]}>
          <Image
            className={props.classes.image}
            src={CollabImage}
            alt="company-name"
            fill
          />
        </div>
        <div className={props.classes["card-description"]}>
          <h2>
            Engineering Intern at Collab Inc <br />
            <span>(May 2022 - Aug 2022)</span>
          </h2>

          <p>
            Upon joining Collab, I started contributing to their internal
            projects with a goal of enhancing user experience, implementing new
            features and...
          </p>
          {/* successfully deployed them to
          production NextJS, Vercel, PlanetScale, Heroku, GitHub Actions, Cypress etc.*/}
          <div className={props.classes.skills}>
            <div className={props.classes["skill-name"]}>Next.js</div>
            <div className={props.classes["skill-name"]}>TypeScript</div>
            <div className={props.classes["skill-name"]}>Git</div>
            <div className={props.classes["skill-name"]}>PlanetScale</div>
            <div className={props.classes["skill-name"]}>GitHub Actions</div>
            <div className={props.classes["skill-name"]}>Cypress</div>
            <div className={props.classes["skill-name"]}>CI/CD</div>
            <div className={props.classes["skill-name"]}>Fork</div>
            <div className={props.classes["skill-name"]}>Web Development</div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Collab
