import React from "react"

import "../styles/blogs.scss"

import HoverLink from "./hoverLink"

const Blogs = () => {
  const blogs = [
    {
      title: "How to make your website load faster",
      description: "Ways to improve your website’s SEO",
      link:
        "https://medium.com/@shubh065/how-to-make-your-website-load-faster-18ed79a6cc59",
    },
  ]

  return (
    <div className="blogs">
      <div className="wrapper">
        <div className="header">
          <h2>Blogs.</h2>
        </div>
        <div className="blogs-container">
          {blogs.map(blog => (
            <div className="blog-item" key={blog.title}>
              <HoverLink link={blog.link} text={blog.title} reverse={false} />
              <p>{blog.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blogs
