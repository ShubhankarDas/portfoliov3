import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import "../../styles/styles.scss"

import Img from "gatsby-image"
import BlogLayout from "../../components/blogLayout"
import HoverLink from "../../components/hoverLink"

const Reslash = () => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile(
        filter: { relativePath: { regex: "/reslash/.+\\\\.png/" } }
      ) {
        edges {
          node {
            name
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      content: markdownRemark(fileAbsolutePath: { regex: "/reslash.md/" }) {
        frontmatter {
          previous
          next
        }
      }
    }
  `)

  const getImage = name => {
    let edge = data.images.edges.filter(edge => {
      return edge.node.name === name
    })

    return edge[0].node.childImageSharp.fluid
  }

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
          <Img fluid={getImage("main")} />
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
        <Img fluid={getImage("white-theme-room")} />
      </div>
      <div className="content">
        <h3>Code</h3>
        <p>
          For the purpose of rapid prototyping, code shareability, and testing,
          I used Vuejs as our frontend stack, build on Firebase serverless
          architecture and Agora as our calling system.
        </p>
      </div>
      <div className="image-wrapper shadow">
        <Img fluid={getImage("white-call")} />
      </div>
      <div className="content">
        <h3>Conclusion</h3>
        <p>
          There we already such messaging application like Slack for
          professional purpose. Hence we pivoted from traditional messaging and
          calling application to a modern interactive video conference platform.{" "}
          <HoverLink
            externalLink="https://reslash.co?source=shubahankar-portofolio"
            text="Click here to checkout the latest version of Reslash."
          />
        </p>
      </div>
      <div className="image-wrapper mini shadow">
        <Img fluid={getImage("mobile")} />
      </div>
    </BlogLayout>
  )
}

export default Reslash
