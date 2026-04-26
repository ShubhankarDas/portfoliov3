import React from "react"

import "../styles/workItem.scss"
import { GatsbyImage } from "gatsby-plugin-image"

const WorkItem = ({ title, description, image, onClickCallback }) => (
  <div
    className="work-item"
    onClick={onClickCallback}
    onKeyDown={onClickCallback}
    role="button"
  >
    <div className="image-container">
      <GatsbyImage image={image} alt={title} />
    </div>
    <div className="info-container">
      <h3 className="info-header">{title}</h3>
      <h5 className="info-description">{description}</h5>
    </div>
  </div>
)

export default WorkItem
