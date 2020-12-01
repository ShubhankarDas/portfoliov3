import React from "react"

import "../styles/footer.scss"
import HoverLink from "./hoverLink"

const Footer = () => (
  <footer>
    <div className="links-container">
      <h3 className="logo">
        Shubhankar.{" "}
        <span className="greetings">
          Have an amazing day{"  "}
          <span role="img" aria-label="hands up" aria-hidden="false">
            🙌🏽
          </span>
        </span>
      </h3>
      <div className="social-links-container">
        <HoverLink link="/" text="LinkedIn" />
        <HoverLink link="/" text="Codepen" />
        <HoverLink link="/" text="Github" />
      </div>
    </div>
  </footer>
)

export default Footer
