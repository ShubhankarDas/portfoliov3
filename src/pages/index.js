import React from "react"

// styles
import "../styles/styles.scss"

// components
import Layout from "../components/layout"
import HomeHero from "../components/homeHero"
import Work from "../components/work"
import Blogs from "../components/blogs"
import PreviousSection from "../components/previousSection"
import Seo from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <HomeHero />
      <Work />
      <Blogs />
      <PreviousSection />
      <Seo />
    </Layout>
  )
}

export default IndexPage
