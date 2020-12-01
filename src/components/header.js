import React from "react"

import { Link } from "gatsby"
import "../styles/header.scss"

import HoverLink from "./hoverLink"

const Header = () => (
  <header>
    <span className="logo">
      <Link to="/">Shubhankar.</Link>
    </span>

    <HoverLink link="#work" text="work" />
    <HoverLink link="/" text="about" />
  </header>
)

export default Header
