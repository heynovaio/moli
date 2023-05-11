import * as React from "react"
import TextBox from "../textbox"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {FaPhone, FaMapMarkerAlt} from 'react-icons/fa'
import { ContactListItem } from "../../styles/pages/contact.module.scss"

const InfoSection = (props) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "map.png"}) {
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
          <TextBox width={644}>
            <h1>Connect with us</h1>
            <p className="BodyText">Fill out the form below to provide details about your project or inquiry. Interested in career opportunities with Moli? Please send cover letter and resume to careers@moli.ca
</p>
            <br/>
            <div className={ContactListItem}>
              <FaPhone/>
              <p className="BodyText"><a href="tel:1-403-250-2733">1-403-250-2733</a></p>
            </div>
            <div className={ContactListItem}>
              <FaMapMarkerAlt/>
              <p className="BodyText">1880 Centre Avenue N.E., Calgary Alberta T2E 0A6</p>
            </div>
          </TextBox>
          <GatsbyImage image={image}/>
        </div>
      </div>
    </section>
  )
}

export default InfoSection