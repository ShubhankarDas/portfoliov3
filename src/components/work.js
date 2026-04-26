import React from "react"
import { graphql, useStaticQuery, navigate } from "gatsby"
import { getImage } from "gatsby-plugin-image"

import "../styles/work.scss"

import WorkItem from "./workItem"

const Work = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { frontmatter: { sequence: ASC } }) {
        edges {
          node {
            frontmatter {
              title
              description
              slug
              projectLink
              bannerColor
              categories
              bannerImage {
                childImageSharp {
                  gatsbyImageData(width: 800)
                }
              }
            }
          }
        }
      }
    }
  `)

  const routeTo = (slug, projectLink) => {
    if (projectLink) {
      window.location = projectLink
    } else {
      navigate(`/blogs/${slug}`)
    }
  }

  return (
    <div id="work">
      <div className="wrapper">
        <div className="header">
          <h2>Some of my work.</h2>
        </div>
        <div className="work-item-container">
          {data.allMarkdownRemark.edges.map(edge => (
            <WorkItem
              title={edge.node.frontmatter.title}
              description={edge.node.frontmatter.description}
              image={getImage(edge.node.frontmatter.bannerImage)}
              bannerColor={edge.node.frontmatter.bannerColor}
              key={edge.node.frontmatter.title}
              onClickCallback={() =>
                routeTo(
                   edge.node.frontmatter.slug,
                   edge.node.frontmatter.projectLink
                )
              }
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Work
