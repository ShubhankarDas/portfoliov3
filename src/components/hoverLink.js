import React from "react"

import { Link } from "gatsby"
import "../styles/hoverLink.scss"

const HoverLink = ({ link, externalLink, text, reverse }) => {
  return (
    <span className={reverse ? "hover-link reverse" : "hover-link"}>
      {link ? (
        <Link to={link}>{text}</Link>
      ) : externalLink ? (
        <a href={externalLink}>{text}</a>
      ) : (
        <span>{text}</span>
      )}
    </span>
  )
}

export default HoverLink
