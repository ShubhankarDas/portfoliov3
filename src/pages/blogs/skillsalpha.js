import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import "../../styles/styles.scss"

import Img from "gatsby-image"
import BlogLayout from "../../components/blogLayout"

const Skillsalpha = () => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile(
        filter: { relativePath: { regex: "/skillsalpha/.+\\\\.(jpg|png)/" } }
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
      content: markdownRemark(fileAbsolutePath: { regex: "/skillsalpha.md/" }) {
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
      pageTitle="Skillsalpha"
      nextBlog={getLink("next")}
      prevBlog={getLink("previous")}
    >
      <div className="hero-section">
        <div className="left-section">
          <h2 className="title">Skillsalpha</h2>
          <h3 className="sub-title">E-learning enterprise platform</h3>
        </div>
        <div className="right-section shadow">
          <Img fluid={getImage("cover-desktop")} />
        </div>
      </div>
      <div className="content">
        <h3>About</h3>
        <p>
          SkillsAlpha is a skilling tool for employees with integrated multiple
          course and a visual career path.
        </p>
      </div>
      <div className="content">
        <p>
          I worked in with team of 8 developers. My major focus was on front-end
          and dev-ops. Here i worked on UI components and learning module using
          angular 1. I also created new APIs for loading content on iFrames.
        </p>
      </div>
      <div className="content">
        <p>
          Website -{" "}
          <a href="https://skillsalpha.com" target="_blank" rel="noreferrer">
            https://skillsalpha.com
          </a>
        </p>
      </div>
    </BlogLayout>
  )
}

export default Skillsalpha
