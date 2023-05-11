import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSection from "../components/Homepage/HeroSection"
import StatSection from "../components/Homepage/StatSection"
import CarouselSection from "../components/Homepage/CarouselSection"
import AccordionSection from "../components/Homepage/AccordionSection"
import AboutSection from "../components/Homepage/AboutSection"
import ValuesSection from "../components/Homepage/ValuesSection"

const IndexPage = () => (
  <Layout>
    <HeroSection/>
    <StatSection/>
    <CarouselSection/>
    <AccordionSection/>
    <AboutSection/>
    <ValuesSection/>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
