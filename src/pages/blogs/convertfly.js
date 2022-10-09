import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import "../../styles/styles.scss"

import BlogLayout from "../../components/blogLayout"

// images
import heroBanner from "../../images/convertfly/convertfly-home-ori.png"
import convertflyTools from "../../images/convertfly/convertfly-tools.png"
import tools2 from "../../images/convertfly/tools-2.png"
import campaign1 from "../../images/convertfly/campaign-1.png"
import campaign2 from "../../images/convertfly/campaign-2.png"

const Convertfly = () => {
  const data = useStaticQuery(graphql`
    query {
      content: markdownRemark(fileAbsolutePath: { regex: "/convertfly.md/" }) {
        frontmatter {
          previous
          next
        }
      }
    }
  `)

  const getLink = type => {
    let link = data.content.frontmatter[type]
    if (link) {
      if (link.includes("http")) {
        return { externalLink: link, title: type }
      }
      return { link, title: type }
    }
    return undefined
  }

  return (
    <BlogLayout
      pageTitle="Convertfly"
      nextBlog={getLink("next")}
      prevBlog={getLink("previous")}
    >
      <div className="hero-section">
        <div className="left-section">
          <h2 className="title">Convertfly</h2>
          <h3 className="sub-title">Facebook messenger marketing</h3>
        </div>
        <div className="right-section">
          <img alt="Contentful" src={heroBanner} />
        </div>
      </div>
      <div className="content">
        <h3>About</h3>
        <p>
          Convertfly is a Messenger marketing app built for Shopify.
          Convertfly’s main target audience consisted of people who are not
          marketers but people selling stuff they craft (some do drop-shipping).
        </p>
      </div>
      <div className="image-wrapper">
        <img alt="Contentful" src={convertflyTools} />
      </div>
      <div className="content">
        <h2>Code</h2>
        <p>
          For the purpose of rapid prototyping, code shareability, and testing,
          Zone features a full stack Javascript codebase.
        </p>
      </div>
      <div className="content">
        <h3>The Front-End</h3>
        <p>
          The front-end went through many stages of iterations. One of the
          largest changes during the prototyping phase was deciding the UI
          components in our campaigns.
        </p>
      </div>
      <div className="content">
        <h3>The Back-End</h3>
        <p>
          The back-end, which was written in NodeJs, handled most of the heavy
          data processing. Convertfly used MongoDb (NoSql) for storing data.
          There were multiple tasks and cron jobs to be run in back ground for
          each campaign and depending on the work it had to access third party
          APIs such as Facebook and Shopify.
        </p>
      </div>
      <div className="image-wrapper">
        <img alt="Contentful" src={tools2} />
      </div>

      <div className="content">
        <p>
          The most exciting and the challenging task during the creation was
          designing the data flow for each campaign with keeping the
          cross-platform variables in mind.
        </p>
        <p>
          Customer Feedback is a major part for the growth of any product. We
          spoke out to our existing customers about the features we were planing
          to integrate.
        </p>
      </div>
      <div className="image-wrapper">
        <img alt="Contentful" src={campaign1} />
      </div>
      <div className="content">
        <h3>Result</h3>
        <p>
          We on-boarded more than 1200 e-commerce stores who recovered
          $4,40,000+ in revenue. Our Shopify App store rating hit 4.7+ with over
          ~30 reviews. Engaged with almost all customers and onboarded
          enterprise accounts like Million Roses and Scented Treasures.
        </p>
      </div>
      <div className="image-wrapper">
        <img alt="Contentful" src={campaign2} />
      </div>
    </BlogLayout>
  )
}

export default Convertfly
