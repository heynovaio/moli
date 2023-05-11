import * as React from "react"
import TextBox from "../textbox"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Form } from "../../styles/pages/contact.module.scss"

const FormSection = (props) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "form.png"}) {
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
            <h2>SEND MESSAGE</h2>
            <form className={Form}>
              <label htmlFor="name">
                Name
              </label>
              <input type="text" name="name" id="name"/>
              <label htmlFor="email">
                Email
              </label>
              <input type="email" name="email" id="email"/>
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