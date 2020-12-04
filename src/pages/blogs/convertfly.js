import React from "react"

import BlogLayout from "../../components/blogLayout"
import "../../styles/styles.scss"

const Convertfly = () => {
  let nextBlog = { link: "/", title: "Next" },
    prevBlog = { link: "/", title: "Next" }

  return (
    <BlogLayout pageTitle="Convertfly" nextBlog={nextBlog} prevBlog={prevBlog}>
      Convert fly
    </BlogLayout>
  )
}

export default Convertfly
