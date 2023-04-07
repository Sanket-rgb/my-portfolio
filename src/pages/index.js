import React, { useState } from "react"

import Head from "next/head"
import Link from "next/link"

import classes from "../styles/Home.module.css"

import WorkInfo from "@/components/Work/WorkInfo"
import HobbiesInfo from "@/components/Hobbies/HobbiesInfo"
import AboutInfo from "@/components/About/AboutInfo"
import AboutMe from "@/components/About/AboutMe"
import Contact from "@/components/Footer/Contact"
import Copyright from "@/components/Footer/Copyright"
import ProjectInfo from "@/components/Work/ProjectInfo"

export default function Home() {
  const [mobileNav, setMobileNav] = useState(false)

  const mobileNavHandler = () => {
    setMobileNav(!mobileNav)
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
          <Link href="#work">Work</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#hobby">Hobby</Link>
          <Link href="#contact">Contact</Link>
        </div>
        <div onClick={mobileNavHandler} className={classes["mobile-menu"]}>
          <i
            style={{ fontSize: "23px" }}
            className="fa-solid fa-bars-staggered"
          ></i>
        </div>
      </header>
      <div
        className={`${classes["mobile-nav"]} ${
          classes[mobileNav ? "open-menu" : "closed-menu"]
        }`}
      >
        <span>
          <i onClick={mobileNavHandler} className="fa-solid fa-xmark"></i>
        </span>
        <ul>
          <li>
            <Link onClick={mobileNavHandler} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={mobileNavHandler} href="#about">
              About
            </Link>
          </li>
          <li>
            <Link onClick={mobileNavHandler} href="#work">
              Work
            </Link>
          </li>
          <li>
            <Link onClick={mobileNavHandler} href="#projects">
              Projects
            </Link>
          </li>
          <li>
            <Link onClick={mobileNavHandler} href="#hobby">
              Hobby
            </Link>
          </li>
          <li>
            <Link onClick={mobileNavHandler} href="#contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <AboutInfo />
      <AboutMe id="about" />
      <WorkInfo id="work" />
      <ProjectInfo id="projects" />
      <HobbiesInfo id="hobby" />
      <Contact id="contact" />
      <Copyright />
    </React.Fragment>
  )
}
