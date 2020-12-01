import React from "react"
import "../styles/layout.scss"
import PropTypes from "prop-types"

// components
import Header from "../components/header"
import Footer from "../components/footer"

const Layout = ({ children }) => (
  <div className="main-wrapper">
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
