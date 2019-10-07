import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/Layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Home</h1>
    <ul>
      <li>
        <Link to="/" activeStyle={{ color:"red" }}>Home</Link>
      </li>
    </ul>
  </Layout>
)

export default IndexPage
