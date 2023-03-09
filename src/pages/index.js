import React, { useState } from "react"

import About from "@/components/About/About"
import Hobbies from "@/components/Hobbies/Hobbies"
import Work from "@/components/Work/Work"

import WorkInfo from "@/components/Work/WorkInfo"
import HobbiesInfo from "@/components/Hobbies/HobbiesInfo"
import AboutInfo from "@/components/About/AboutInfo"

import SocialMediaLinks from "@/components/Footer/SocialMediaLinks"

import classes from "../components/Navigation.module.css"

export default function Home() {
  const [selectedNav, setSelectedNav] = useState("ABOUT")

  const navSelectorhandler = (selectedNav) => {
    setSelectedNav(selectedNav)
  }

  return (
    <React.Fragment>
      <div className={classes["nav-bar"]}>
        <Work selectedNav={selectedNav} onSelectNav={navSelectorhandler} />
        <Hobbies selectedNav={selectedNav} onSelectNav={navSelectorhandler} />
        <About selectedNav={selectedNav} onSelectNav={navSelectorhandler} />
      </div>
      {selectedNav === "WORK" && <WorkInfo />}
      {selectedNav === "HOBBIES" && <HobbiesInfo />}
      {selectedNav === "ABOUT" && <AboutInfo />}
      <SocialMediaLinks tabType={selectedNav} />
    </React.Fragment>
  )
}
