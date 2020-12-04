import React from "react"
import PropTypes from "prop-types"

import "../styles/blogLayout.scss"

import Footer from "./footer"
import BlogNav from "./blogNav"
import Seo from "./seo"
import HoverLink from "./hoverLink"

const BlogLayout = ({ children, nextBlog, prevBlog, pageTitle }) => (
  <div className="main-wrapper blog-wrapper">
    <Seo pageTitle={pageTitle} />
    <header>
      <HoverLink link="/" text="Home" />
    </header>
    <main>{children}</main>
    <BlogNav prev={prevBlog} next={nextBlog} />
    <Footer />
  </div>
)

BlogLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BlogLayout
