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
            <h1>CONTACT US</h1>
            <p>Imperdiet gravida viverra convallis et dolor at viverra. Nascetur at euismod consectetur id amet. Pellentesque maecenas sed pretium cras blandit ullamcorper id tortor sem. </p>
            <br/>
            <div className={ContactListItem}>
              <FaPhone/>
              <p>(123) 456-7891</p>
            </div>
            <div className={ContactListItem}>
              <FaMapMarkerAlt/>
              <p>Add address here <br/>amet ullamco dolor proident <br/>Exercitation velit ea </p>
            </div>
          </TextBox>
          <GatsbyImage image={image}/>
        </div>
      </div>
    </section>
  )
}

export default InfoSection