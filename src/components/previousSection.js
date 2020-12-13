import React from "react"

import HoverLink from "./hoverLink"
import "../styles/previousSection.scss"

const PreviousSection = () => {
  const versions = [
    {
      title: "Version 3 - current version",
      description: "2020 - present",
      link: "https://shubhankardas.me",
    },
    {
      title: "Version 2",
      description: "2018 - 2020",
      link: "https://shubhankarDas.github.io",
    },
  ]

  return (
    <div className="previous-section">
      <div className="wrapper">
        <div className="header">
          <h2>Previous versions.</h2>
        </div>
        <div className="version-container">
          {versions.map(version => (
            <div className="version-item" key={version.title}>
              <HoverLink
                externalLink={version.link}
                text={version.title}
                reverse={false}
              />
              <p>{version.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PreviousSection
