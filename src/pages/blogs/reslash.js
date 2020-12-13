import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import "../../styles/styles.scss"

import Img from "gatsby-image"
import BlogLayout from "../../components/blogLayout"

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
          <h3 className="sub-title">Coming soon.</h3>
        </div>
        <div className="right-section shadow">
          <Img fluid={getImage("main")} />
        </div>
      </div>
    </BlogLayout>
  )
}

export default Reslash
