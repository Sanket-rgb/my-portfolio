import React, { useState } from "react"

import About from "@/components/About/About"
import Hobbies from "@/components/Hobbies/Hobbies"
import Work from "@/components/Work/Work"

import WorkInfo from "@/components/Work/WorkInfo"
import HobbiesInfo from "@/components/Hobbies/HobbiesInfo"
import AboutInfo from "@/components/About/AboutInfo"

import SocialMediaLinks from "@/components/Footer/SocialMediaLinks"

// import classes from "../components/Navigation.module.css"
import classes from "../styles/Home.module.css"
import Image from "next/image"
import Head from "next/head"
import Link from "next/link"
import AboutMe from "@/components/About/AboutMe"
import Contact from "@/components/Footer/Contact"
import Copyright from "@/components/Footer/Copyright"

export default function Home() {
  const [selectedNav, setSelectedNav] = useState("ABOUT")
  const [menuList, setMenuList] = useState(false)

  const navSelectorhandler = (selectedNav) => {
    setSelectedNav(selectedNav)
  }

  const menuListHandler = () => {
    setMenuList(!menuList)
  }

  return (
    <React.Fragment>
      <Head>
        <title>Sanket Koli | Front-end Developer</title>
        <meta name="about" content="About me" key="desc" />
      </Head>
      <header className={classes.header}>
        <Link href="/">Sanket.dev</Link>
        <div className={classes.links}>
          <Link href="/">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#projects">Work</Link>
          <Link href="#hobby">Hobby</Link>
          <Link href="#contact">Contact</Link>
        </div>
        <div className={classes["mobile-menu"]}>
          <i
            style={{ fontSize: "23px" }}
            class="fa-solid fa-bars-staggered"
          ></i>
        </div>
      </header>
      <AboutInfo />
      <AboutMe id="about" />
      <WorkInfo id="projects" />
      <HobbiesInfo id="hobby" />
      <Contact id="contact" />
      <Copyright />
      {/* <header className={classes["nav-bar"]}>
        <div className={classes["nav-bar-items"]}>
          <Work selectedNav={selectedNav} onSelectNav={navSelectorhandler} />
          <Hobbies selectedNav={selectedNav} onSelectNav={navSelectorhandler} />
          <About selectedNav={selectedNav} onSelectNav={navSelectorhandler} />
        </div>
        <div className={classes["menu-bar"]}>
          <Image
            onClick={menuListHandler}
            className={classes.image}
            alt="menu-burger"
            src="https://cdn.shopify.com/s/files/1/0516/4082/8070/t/2/assets/burger.svg"
            width={30}
            height={17}
          ></Image>
        </div>
      </header> */}
      {/* {menuList && (
        <div className={classes["mobile-menu-items"]}>
          <Work
            className={classes["mobile-menu"]}
            selectedNav={selectedNav}
            onSelectNav={navSelectorhandler}
          />
          <Hobbies
            className={classes["mobile-menu"]}
            selectedNav={selectedNav}
            onSelectNav={navSelectorhandler}
          />
          <About
            className={classes["mobile-menu"]}
            selectedNav={selectedNav}
            onSelectNav={navSelectorhandler}
          />
        </div>
      )} */}

      {/* {selectedNav === "WORK" && <WorkInfo />}
      {selectedNav === "HOBBIES" && <HobbiesInfo />}
      {selectedNav === "ABOUT" && <AboutInfo />}
      <SocialMediaLinks tabType={selectedNav} /> */}
    </React.Fragment>
  )
}
