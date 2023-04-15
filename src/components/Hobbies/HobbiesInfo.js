import React from "react"

import { images } from "@/Utils/Photos"
import classes from "./HobbiesInfo.module.css"
import GridImage from "./GridImage"
const HobbiesInfo = (props) => {
  return (
    <div id={props.id} className={classes["main-wrapper"]}>
      <div className={classes.wrapper}>
        <div className={classes.title}>
          <h2>
            <span>Hobby</span> (Photography)
          </h2>

          <p className={classes["text"]}>
            I started photography when I was in New York City for about 1.5
            years. I have clicked each of the following picture using iPhone 13
            Pro and editing using Lightroom mobile. Each photograph is unique
            and thoughfully captioned. Explore more on{" "}
            <span>
              <a target="_blank" href="https://instagram.com/estclicks">
                @estclicks
              </a>
            </span>
          </p>
        </div>

        {/* <div className={classes.banner}></div> */}
        <div className={classes.container}>
          {images.map((image, index) => (
            <div className={classes.imageContainer} key={index}>
              <GridImage
                className={classes.image}
                id={image.id}
                path={image.path}
                category={image.category}
                description={image.description}
                location={image.location}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HobbiesInfo
