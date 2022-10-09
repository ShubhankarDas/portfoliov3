import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import "../../styles/styles.scss"

import BlogLayout from "../../components/blogLayout"

// images
import editor from "../../images/visualgator/Editor.png"
import desktop from "../../images/visualgator/Desktop.png"
import mobile from "../../images/visualgator/Mobile.png"
import visualgatorModeration from "../../images/visualgator/visualgator-moderation.png"

const Visualgator = () => {
  const data = useStaticQuery(graphql`
    query {
      content: markdownRemark(fileAbsolutePath: { regex: "/visualgator.md/" }) {
        frontmatter {
          previous
          next
        }
      }
    }
  `)

  const getLink = type => {
    if (data.content.frontmatter[type]) {
      return { link: data.content.frontmatter[type], title: type }
    }
    return undefined
  }

  return (
    <BlogLayout
      pageTitle="Visualgator"
      nextBlog={getLink("next")}
      prevBlog={getLink("previous")}
    >
      <div className="hero-section">
        <div className="left-section">
          <h2 className="title">Visualgator</h2>
          <h3 className="sub-title">Email review collector tool</h3>
        </div>
        <div className="right-section shadow">
          <img alt="Visualgator" src={editor} />
        </div>
      </div>
      <div className="content">
        <h3>About</h3>
        <p>
          VisualGator is a visual review collector tool for an e-commerce
          platform called Shopify. VisualGator's goal was to collect photographs
          of customers showing off the product and give ratings.
        </p>
      </div>
      <div className="image-wrapper shadow">
        <img alt="Visualgator" src={desktop} />
      </div>
      <div className="content">
        <h2>Code</h2>
        <p>
          I worked with a team of 2 members from ideations to production. There
          were multiple iterations with the requirements. As we were a small
          team we wore multiple hats. One of the hats made us take feedback from
          our users which helped us understanding the real world issues in
          depth.
        </p>
      </div>
      <div className="image-wrapper mini shadow">
        <img alt="Visualgator" src={mobile} />
      </div>
      <div className="content">
        <h3>The Front-End</h3>
        <p>
          The front-end was written in Pug template and Saas. One of the
          challenges were the compatibility of the review on every theme used by
          the Shopify customer.
        </p>
      </div>
      <div className="content">
        <h3>The Back-End</h3>
        <p>
          The back-end had most of the work as it had to communicate with the
          Shopify api for orders and the product views. We used NodeJs for
          maintaining our back-end with MongoDb (NoSql) as our choice of
          database.
        </p>
      </div>
      <div className="image-wrapper shadow">
        <img alt="Visualgator" src={visualgatorModeration} />
      </div>
    </BlogLayout>
  )
}

export default Visualgator
