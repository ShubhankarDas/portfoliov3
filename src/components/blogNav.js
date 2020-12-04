import React from "react"

import "../styles/blogNav.scss"
import HoverLink from "./hoverLink"

const BlogNav = ({ prev, next }) => (
  <div className="blog-nav">
    <HoverLink link={prev.link} text={prev.title} reverse={false} />
    <HoverLink link={next.link} text={next.title} reverse={false} />
  </div>
)

export default BlogNav
