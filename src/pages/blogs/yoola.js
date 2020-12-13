import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import "../../styles/styles.scss"

import Img from "gatsby-image"
import BlogLayout from "../../components/blogLayout"

const Yoola = () => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile(
        filter: { relativePath: { regex: "/yoola/.+\\\\.(jpg|png)/" } }
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
      content: markdownRemark(fileAbsolutePath: { regex: "/yoola.md/" }) {
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
      pageTitle="Yoola"
      nextBlog={getLink("next")}
      prevBlog={getLink("previous")}
    >
      <div className="hero-section">
        <div className="left-section">
          <h2 className="title">Yoola</h2>
          <h3 className="sub-title">Android Application</h3>
        </div>
        <div className="right-section shadow">
          <Img fluid={getImage("cover")} />
        </div>
      </div>
      <div className="content">
        <h3>About</h3>
        <p>
          Yoola is an Android application which connects local vendors and
          consumers. Yoola shows vendors within 5km and can be sorted via their
          categories and rating. Consumer can start chatting with the vendor
          over Yoola without disclosing their identity. The user can also
          broadcast the requirement and let the vendor who has the item can
          message you back.
        </p>
      </div>
      <div className="content">
        <h3>Problem trying to solve</h3>
        <p>
          It is very difficult for working people to get all the grocery items
          from the vendors. They also love the local vendors as they have
          already created a nice relation which gives them discounts on each
          purchase, but dont have time due their busy schedule. People go
          through a difficult time searching for a particular item, they end up
          going to all the stores near by. This cost the travel as well as time.
        </p>
      </div>
      <div className="content">
        <p>
          Yoola does just that! Yoola you can get all the nearby stores and
          their location. If in doubt or hurry, Yoola will provide you the
          messaging platform for discussing with the vendor.
        </p>
      </div>
      <div className="image-wrapper img-shadow multiple">
        <Img fluid={getImage("yoola-signup-new")} />
        <Img fluid={getImage("yoola-signup-new")} />
      </div>
      <div className="content">
        <h3>The Front-End</h3>
        <p>
          The Android UI designs had multiple iterations. After few months of
          the first launch we decided to relaunch it with a completely new
          design. Revamping all the modules with keeping its functionality and
          android limitations in mind at that moment was challenging. We used
          Material design system for the revamped application. Creating the Chat
          flow UX was very interesting and took most of the time in the entire
          process.
        </p>
      </div>
      <div className="image-wrapper img-shadow multiple">
        <Img fluid={getImage("yoola-home-new")} />
        <Img fluid={getImage("yoola-home-old")} />
      </div>
      <div className="content">
        <h3>The Back-End</h3>
        <p>
          The back-end was written in asp.net and were used for crud operations
          on our MySql database. Whereas for messaging database we went Firebase
          for its real-time listeners on any data event for android devices. One
          of the challenges while designing and implementing the messaging
          architecture was its depth level structure of the database and queries
          needed to run smooth.
        </p>
      </div>
      <div className="image-wrapper img-shadow multiple">
        <Img fluid={getImage("yoola-broadcast")} />
        <Img fluid={getImage("yoola-chat-error")} />
      </div>
    </BlogLayout>
  )
}

export default Yoola
