import Image from "next/image"
import Link from "next/link"

import FrshrImage from "../../../../public/Images/Work/Frshr.jpg"
const Frshr = (props) => {
  return (
    <div className={props.classes["card-container"]}>
      <Link
        href="/WorkInfo/FrshrTech"
        className={props.classes["card-inner-container"]}
      >
        <div className={props.classes["image-container"]}>
          <Image
            className={props.classes.image}
            src={FrshrImage}
            alt="company-name"
            fill
          />
        </div>
        <div className={props.classes["card-description"]}>
          <h2>Software Developer at Frshr Technologies (Jun 2020- Aug 2021)</h2>

          {/* <p>
            During my tenure with Frshr Technologies, my responsibilities have
            included interacting with our clients on weekly basis to understand
            their requirements and expectations and plan and organize work to
            successfully hand over the deliverables to the client.
          </p> */}
          <p>
            When I joined Frshr Technologies we were a team of only 6-7 people
            back then including myself. My responsibilities included interacting
            with the clients to understand their requirements and...
          </p>
          <div className={props.classes.skills}>
            <div className={props.classes["skill-name"]}>Flutter</div>
            <div className={props.classes["skill-name"]}>Node</div>
            <div className={props.classes["skill-name"]}>GitHub</div>
            <div className={props.classes["skill-name"]}>Xcode</div>
            <div className={props.classes["skill-name"]}>TestFlight</div>
            <div className={props.classes["skill-name"]}>Figma</div>
            <div className={props.classes["skill-name"]}>GitKraken</div>
            <div className={props.classes["skill-name"]}>
              Mobile App Development
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Frshr
