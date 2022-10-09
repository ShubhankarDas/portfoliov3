import React from "react"

import "../styles/homeHero.scss"
import HoverLink from "./hoverLink"
import profileImage from "../images/profile_prev_ui.png"

const HomeHero = () => (
  <div id="home-hero">
    <div className="wrapper">
      <h1>
        <span
          className="animate-wave"
          role="img"
          aria-label="hand waving"
          aria-hidden="false"
        >
          👋🏽
        </span>{" "}
        <br />
        Hi there! I am Shubhankar, digital product developer.
      </h1>
      <h4>
        I'm passionate about technology and on a journey to build user centric
        products. Currently working at{" "}
        <HoverLink
          externalLink="https://browserstack.com"
          text="Browserstack"
        />
        .
      </h4>
    </div>
    <div className="profile-hero">
      <img src={profileImage} />
    </div>
  </div>
)

export default HomeHero
