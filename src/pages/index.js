import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Form from "../components/form"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Contact Form</h1>
    <Form />

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
