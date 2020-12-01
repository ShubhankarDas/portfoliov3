import React from "react"

import "../styles/homeHero.scss"
import HoverLink from "./hoverLink"

const HomeHero = () => (
  <div id="home-hero">
    <div className="wrapper">
      <h1>
        <span role="img" aria-label="hand waving" aria-hidden="false">
          👋🏽
        </span>{" "}
        <br />
        Hi there! I am Shubhankar, digital product developer, currently based in
        India.
      </h1>
      <h4>
        I love connecting ideas with reality and leaving customers with a nice
        experience. Currently I am working with{" "}
        <HoverLink link="/" text="Browserstack" />.
      </h4>
    </div>
  </div>
)

export default HomeHero
