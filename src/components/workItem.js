import React from "react"

import "../styles/workItem.scss"
import Img from "gatsby-image"

const WorkItem = ({
  title,
  description,
  image,
  bannerColor,
  onClickCallback,
}) => (
  <div
    className="work-item"
    onClick={onClickCallback}
    onKeyDown={onClickCallback}
    role="button"
  >
    <div className="image-container">
      <Img fluid={image} />
    </div>
    <div className="info-container">
      <h3 className="info-header">{title}</h3>
      <h5 className="info-description">{description}</h5>
    </div>
  </div>
)

export default WorkItem
