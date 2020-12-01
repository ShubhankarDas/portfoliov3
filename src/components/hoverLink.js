import React from "react"

import { Link } from "gatsby"
import "../styles/hoverLink.scss"

const HoverLink = ({ link, text, reverse }) => {
  return (
    <span className={reverse ? "hover-link reverse" : "hover-link"}>
      {link ? <Link to={link}>{text}</Link> : <span>{text}</span>}
    </span>
  )
}

export default HoverLink
