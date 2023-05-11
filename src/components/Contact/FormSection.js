import * as React from "react"
import TextBox from "../textbox"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
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
  return (
    <section>
      <div className="Container">
        <div className="FlexWrap">
          <GatsbyImage image={image}/>
          <TextBox width={750}>
            <h2>Connect with us</h2>
            {/* <p className="BodyText">
              Fill out the form below to provide details about your project or inquiry. Interested in career opportunities with Moli? Please send cover letter and resume to <a href="mailto:careers@moli.ca">careers@moli.ca</a>
            </p> */}
            <form className={Form}>
              <label htmlFor="name">
                Name
              </label>
              <input type="text" name="name" id="name"/>
              <label htmlFor="email">
                Email
              </label>
              <input type="email" name="email" id="email"/>
              <label htmlFor="subject">
                Subject
              </label>
              <input type="text" name="subject" id="subject"/>
              <label htmlFor="message">
                Message
              </label>
              <textarea name="message" id="message" rows={7}/>
              <input type="submit" value="Send Message" className="BtnContained"/>
            </form>
          </TextBox>
          
        </div>
      </div>
    </section>
  )
}

export default FormSection