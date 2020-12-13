import React from "react"

import "../styles/blogNav.scss"
import HoverLink from "./hoverLink"

const BlogNav = ({ prev, next }) => (
  <div className="blog-nav">
    {prev ? <HoverLink {...prev} text={prev.title} reverse={false} /> : ""}

    {next ? <HoverLink {...next} text={next.title} reverse={false} /> : ""}
  </div>
)

export default BlogNav
