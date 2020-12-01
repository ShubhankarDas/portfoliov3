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
        <HoverLink link="/" text="LinkedIn" reverse={true} />
        <HoverLink link="/" text="Codepen" reverse={true} />
        <HoverLink link="/" text="Github" reverse={true} />
      </div>
    </div>
  </footer>
)

export default Footer
