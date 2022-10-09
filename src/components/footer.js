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
    </div>
  </footer>
)

export default Footer
