import React, { useState } from "react"

import About from "@/components/About/About"
import Hobbies from "@/components/Hobbies/Hobbies"
import Work from "@/components/Work/Work"
import classes from "../styles/Home.module.css"
import WorkInfo from "@/components/Work/WorkInfo"
import HobbiesInfo from "@/components/Hobbies/HobbiesInfo"
import AboutInfo from "@/components/About/AboutInfo"

export default function Home() {
  const [selectedNav, setSelectedNav] = useState("ABOUT")

  const navSelectorhandler = (selectedNav) => {
    setSelectedNav(selectedNav)
  }

  return (
    <React.Fragment>
      <ul className={classes.nav}>
        <li>
          <Work onSelectNav={navSelectorhandler} />
        </li>
        <li>
          <Hobbies onSelectNav={navSelectorhandler} />
        </li>
        <li>
          <About onSelectNav={navSelectorhandler} />
        </li>
      </ul>
      {selectedNav === "WORK" && <WorkInfo />}
      {selectedNav === "HOBBIES" && <HobbiesInfo />}
      {selectedNav === "ABOUT" && <AboutInfo />}
    </React.Fragment>
  )
}
