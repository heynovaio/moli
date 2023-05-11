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
                <p>Our fabrication shop uses exceptional automation equipment & staff to provide timely fabrication, while ensuring superior quality results.</p>
              </div>
              <div>
                <h3 className="Subtitle-2">Safety</h3>
                <p>Our preventative approach to safety requires the commitment from management, employees, contractors, vendors and customers to avoid serious incidents. </p>
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