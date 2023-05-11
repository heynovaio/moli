import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ProjectsSection from "../components/Projects/ProjectsSection"

const ProjectsPage = () => (
  <Layout>
    <ProjectsSection/>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Projects" />

export default ProjectsPage