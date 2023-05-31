import * as React from "react"
import TextBox from "../textbox"
import {FaPhone, FaMapMarkerAlt} from 'react-icons/fa'
import { ContactListItem } from "../../styles/pages/contact.module.scss"
import Map from "../Contact/Map"

const InfoSection = (props) => {
  return (
    <section>
      <div className="Container">
        <div className="FlexWrap">
          <TextBox width={644}>
            <h1>Connect with us</h1>
            <p className="BodyText">
              Fill out the form below to provide details about your project or inquiry.</p>
              <p className="BodyText">Interested in career opportunities with Moli?<br/>Please send cover letter and resume to careers@moli.ca
</p>
            <br/>
            <div className={ContactListItem}>
              <FaPhone className="BodyText"/>
              <p className="BodyText"><a href="tel:1-403-250-2733">1-403-250-2733</a></p>
            </div>
            <div className={ContactListItem}>
              <FaMapMarkerAlt className="BodyText"/>
              <p className="BodyText">1880 Centre Avenue N.E., Calgary Alberta T2E 0A6</p>
            </div>
          </TextBox>
          <Map />
        </div>
      </div>
    </section>
  )
}

export default InfoSection