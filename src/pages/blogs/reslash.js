import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import "../../styles/styles.scss"

import BlogLayout from "../../components/blogLayout"

// images
import heroBanner from "../../images/reslash/main.png"
import whiteThemeRoom from "../../images/reslash/white-theme-room.png"
import architecture from "../../images/reslash/architecture.png"
import whiteCall from "../../images/reslash/white-call.png"
import mobile from "../../images/reslash/mobile.png"

const Reslash = () => {
  const data = useStaticQuery(graphql`
    query {
      content: markdownRemark(fileAbsolutePath: { regex: "/reslash.md/" }) {
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
      pageTitle="Reslash"
      nextBlog={getLink("next")}
      prevBlog={getLink("previous")}
    >
      <div className="hero-section">
        <div className="left-section">
          <h2 className="title">Reslash</h2>
          <h3 className="sub-title">Messaging and calling application</h3>
        </div>
        <div className="right-section shadow">
          <img src={heroBanner} />
        </div>
      </div>
      <div className="content">
        <h3>About</h3>
        <p>
          Reslash is a web based real-time messaging application. The idea was
          to mimic a meeting room virtually, where users would be a part of
          multiple rooms and could join any ongoing call in the room.
        </p>
      </div>
      <div className="image-wrapper shadow">
        <img src={whiteThemeRoom} />
      </div>
      <div className="content">
        <h3>Process & Architecture</h3>
        <p>
          After gathering requirements for the application, I created an
          overview design of the frontend system(as shown below). It elaborates
          the data flow of different use-cases and the implementation of the
          frontend application. It also shows the communication between
          different components and storage.
        </p>
      </div>
      <div className="image-wrapper shadow">
        <img src={architecture} />
      </div>
      <div className="content">
        <h3>Code</h3>
        <p>
          For the purpose of rapid prototyping, code shareability, and testing,
          I used React & Vuejs as our frontend stack, build on Firebase
          serverless architecture and Agora as our calling system.
        </p>
      </div>
      <div className="image-wrapper shadow">
        <img src={whiteCall} />
      </div>
      <div className="content">
        <h3>Conclusion</h3>
        <p>
          There we already such messaging application like Slack for
          professional purpose. Hence we pivoted from traditional messaging and
          calling application to a modern interactive video conference platform.{" "}
          <a href="https://reslash.co?source=shubahankar-portofolio">
            Click here to checkout the latest version of Reslash.
          </a>
        </p>
      </div>
      <div className="image-wrapper mini shadow">
        <img src={mobile} />
      </div>
    </BlogLayout>
  )
}

export default Reslash
