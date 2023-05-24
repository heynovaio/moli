import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TextBox from "../components/textbox"
import {ThankYou} from '../styles/pages/contact.module.scss'
import { Link } from "gatsby"

const ContactThankYou = () => (
  <section className={ThankYou}>
    <SEO title="Thank You" />
    <TextBox style="max-width: 80%; margin: 0 auto">
      <h1>Thank You for contacting us!</h1>
      <p>We will get back to you as soon as we can!</p>
    </TextBox>
    <Link to="/" className="BtnContained">
      Back to Home
    </Link>
  </section>
)

export default ContactThankYou