import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery, navigate } from "gatsby"

import "../styles/work.scss"

import HoverLink from "./hoverLink"
import WorkItem from "./workItem"

const Work = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: [frontmatter___sequence], order: ASC }
      ) {
        edges {
          node {
            frontmatter {
              title
              description
              slug
              bannerColor
              categories
              bannerImage {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const filterMapping = {
    ALL: "all",
    WEB: "web",
    MOBILE: "mobile",
    EXTENSION: "extension",
  }
  const [filter, setFilter] = useState(filterMapping.ALL)
  const [filteredItems, setFilteredItems] = useState([])

  useEffect(() => {
    let items = data.allMarkdownRemark.edges.reduce((result, edge) => {
      if (!edge.node.frontmatter.categories.includes(filter)) {
        return result
      }
      result.push({
        title: edge.node.frontmatter.title,
        description: edge.node.frontmatter.description,
        bannerColor: edge.node.frontmatter.bannerColor,
        categories: edge.node.frontmatter.categories,
        bannerImage: edge.node.frontmatter.bannerImage.childImageSharp.fluid,
        slug: edge.node.frontmatter.slug,
      })
      return result
    }, [])

    console.log(items)

    setFilteredItems(items)
  }, [filter])

  const routeTo = slug => {
    navigate(`/blogs/${slug}`)
  }

  return (
    <div id="work">
      <div className="wrapper">
        <div className="header">
          <h2>Some of my work.</h2>
        </div>
        <div className="filter-container">
          <div
            className="filter-item"
            onClick={() => setFilter(filterMapping.ALL)}
            onKeyDown={() => setFilter(filterMapping.ALL)}
          >
            <HoverLink text="All" reverse={filter !== filterMapping.ALL} />
          </div>
          <div
            className="filter-item"
            onClick={() => setFilter(filterMapping.WEB)}
            onKeyDown={() => setFilter(filterMapping.WEB)}
          >
            <HoverLink text="Web" reverse={filter !== filterMapping.WEB} />
          </div>
          <div
            className="filter-item"
            onClick={() => setFilter(filterMapping.MOBILE)}
            onKeyDown={() => setFilter(filterMapping.MOBILE)}
          >
            <HoverLink
              text="Mobile"
              reverse={filter !== filterMapping.MOBILE}
            />
          </div>
          <div
            className="filter-item"
            onClick={() => setFilter(filterMapping.EXTENSION)}
            onKeyDown={() => setFilter(filterMapping.EXTENSION)}
          >
            <HoverLink
              text="Extension"
              reverse={filter !== filterMapping.EXTENSION}
            />
          </div>
        </div>
        <div className="work-item-container">
          {filteredItems.map(item => (
            <WorkItem
              title={item.title}
              description={item.description}
              image={item.bannerImage}
              bannerColor={item.bannerColor}
              key={item.title}
              onClickCallback={() => routeTo(item.slug)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Work
