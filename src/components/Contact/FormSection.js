import * as React from "react"
import TextBox from "../textbox"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import { navigate } from 'gatsby-link'
import { Form } from "../../styles/pages/contact.module.scss"

const FormSection = (props) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "about-2.JPG"}) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `)
  const image = getImage(data.file)
  function encode(data) {
    return Object.keys(data)
      .map(
        (key) =>
          encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }
  const [state, setState] = React.useState({})
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/en/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }
  return (
    <section>
      <div className="Container">
        <div className="FlexWrap">
          <GatsbyImage image={image} alt="Welders working on steel projects inside a warehouse."/>
          <TextBox width={750}>
            <h2>Connect with us</h2>
            {/* <p className="BodyText">
              Fill out the form below to provide details about your project or inquiry. Interested in career opportunities with Moli? Please send cover letter and resume to <a href="mailto:careers@moli.ca">careers@moli.ca</a>
            </p> */}
            <form 
              className={Form}
              method="POST"
              data-netlify-honeypot="bot-field"
              data-netlify="true" 
              name="contact"
              onSubmit={handleSubmit}
              action="/contact-thank-you/"
            >
              <label htmlFor="name">
                Name
              </label>
              <input type="text" name="name" id="name" onChange={handleChange}/>
              <label htmlFor="email">
                Email
              </label>
              <input type="email" name="email" id="email" onChange={handleChange}/>
              <label htmlFor="subject">
                Subject
              </label>
              <input type="text" name="subject" id="subject"/>
              <label htmlFor="message">
                Message
              </label>
              <textarea name="message" id="message" rows={7} onChange={handleChange}/>
              <input type="submit" value="Send Message" className="BtnContained"/>
            </form>
          </TextBox>
          
        </div>
      </div>
      <div className="LineGraphic4">
        <StaticImage
          src="../../images/graphic-2.svg"
          alt=""
        />
      </div>
    </section>
  )
}

export default FormSection