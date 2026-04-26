import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "profile.png" }) {
        childImageSharp {
          gatsbyImageData(width: 300, layout: CONSTRAINED)
        }
      }
    }
  `)

  const image = getImage(data.placeholderImage)

  if (!image) {
    return <div>Picture not found</div>
  }

  return <GatsbyImage image={image} alt="Profile" />
}

export default Image
