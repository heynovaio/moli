import * as React from "react"
import TextBox from "../textbox"
import { ValueGrid } from '../../styles/pages/home.module.scss'

const ValuesSection = (props) => {

  return (
    <section>
      <div className="Container">
        <div className="FlexWrap" style={{alignItems: 'flex-start'}}>
          <TextBox width={624}>
            <h2>Our Mission </h2>
            <p className="BodyText">is to provide exceptional steel design, fabrication, and erection services through ongoing innovation, skilled production, and a marked commitment to excellence.</p>
          </TextBox>
          <div>
            <div className={ValueGrid}>
              <div>
                <h3 className="Subtitle-2">Quality</h3>
                <p>Our policy principles are to comply with all applicable laws and regulations, diligence to safety, seek continual improvements and open communication to uphold the quality management system.</p>
              </div>
              <div>
                <h3 className="Subtitle-2">Performance</h3>
                <p>Our fabrication shop uses state of the art Daito Seiki automated equipment. The equipment is recognized for their unsurpassed accuracy and speed.</p>
              </div>
              <div>
                <h3 className="Subtitle-2">Safety</h3>
                <p>We recognize that our employees are our most valued resources, as such we have established a sound safety program aimed at employee education and accident prevention. Our objective is to consistently exceed the legislative safety requirements, we attribute this achievement to over 28 years of membership and active participation with the Manufacturer’s Health & Safety Association, appointing external safety consultants to provide their valuable input and implementing our employee’s suggestions for improvement. </p>
              </div>
              <div>
                <h3 className="Subtitle-2">Reliability</h3>
                <p>High skill base and extensive experience allows our team to consistently supply quality products, competitive pricing and timely delivery to meet the most demanding needs of our clients.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ValuesSection