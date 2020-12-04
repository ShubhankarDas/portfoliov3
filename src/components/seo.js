import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

const Seo = ({ pageTitle }) => {
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
    <Helmet>
      <meta charSet="utf-8" />
      <title>
        {pageTitle ? `${pageTitle} | ` : ""}
        {data.site.siteMetadata.title}
      </title>
    </Helmet>
  )
}

export default Seo
