import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

// styles
import "../styles/styles.scss"

// components
import Layout from "../components/layout"
import HomeHero from "../components/homeHero"
import Work from "../components/work"
import Blogs from "../components/blogs"
import PreviousSection from "../components/previousSection"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Layout>
      <HomeHero />
      <Work />
      <Blogs />
      <PreviousSection />
      <Helmet>
        <meta charSet="utf-8" />
        <title>{data.site.siteMetadata.title}</title>
      </Helmet>
    </Layout>
  )
}

export default IndexPage
