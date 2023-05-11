import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSection from "../components/About/HeroSection"
import StorySection from "../components/About/StorySection"
import OfficeSection from "../components/About/OfficeSection"
import DifferenceSection from "../components/About/DifferenceSection"

const AboutPage = () => (
  <Layout>
    <HeroSection/>
    <StorySection/>
    <DifferenceSection/>
    <OfficeSection/>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="About" />

export default AboutPage