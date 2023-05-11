import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import InfoSection from "../components/Contact/InfoSection"
import FormSection from "../components/Contact/FormSection"

const ContactPage = () => (
  <Layout>
    <InfoSection/>
    <FormSection/>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Contact" />

export default ContactPage