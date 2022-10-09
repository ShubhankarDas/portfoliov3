import React from "react"

import { Link } from "gatsby"
import "../styles/header.scss"

import HoverLink from "./hoverLink"

const Header = () => (
  <header>
    <div className="main-header">
      <span className="logo">
        <Link to="/">Shubhankar.</Link>
      </span>

      {/* <HoverLink link="#work" text="work" />
      <HoverLink link="#home-hero" text="about" /> */}

      <HoverLink
        externalLink="https://twitter.com/shubh065"
        text="Twitter"
        reverse={true}
      />

      <HoverLink
        externalLink="https://www.linkedin.com/in/shubhankardas/"
        text="LinkedIn"
        reverse={true}
      />
      <HoverLink
        externalLink="https://codepen.io/shubhankar-das"
        text="Codepen"
        reverse={true}
      />
      <HoverLink
        externalLink="https://github.com/ShubhankarDas"
        text="Github"
        reverse={true}
      />
    </div>
  </header>
)

export default Header
