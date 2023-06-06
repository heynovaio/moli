import * as React from "react"
import TextBox from "../textbox"
import { ValueGrid } from '../../styles/pages/home.module.scss'
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const ValuesSection = (props) => {

  return (
    <section>
      <div className="Container">
        <div className="FlexWrap" style={{alignItems: 'flex-start'}}>
          <TextBox width={624}>
            <h2>Our Mission </h2>
            <p className="BodyText">to provide exceptional steel design, fabrication, and erection services through ongoing innovation, skilled production, and a marked commitment to excellence.</p>
            <Link to="/about" className="BtnContained">
              Learn More
            </Link>
          </TextBox>
          <div className="LineGraphic2">
              <StaticImage
                src="../../images/graphic-4.svg"
                alt=""
              />
          </div>
          <div>
            <div className={ValueGrid}>
              <div>
                <h3 className="Subtitle-2">Quality</h3>
                <p>Our policy principles are to comply with all applicable laws and regulations, diligence to safety, seek continual improvements and open communication to uphold the quality management system.</p>
              </div>
              <div>
                <h3 className="Subtitle-2">Performance</h3>
                <p>We deliver excellence in all aspects of commercial steel manufacturing and construction. We offer unwavering dedication to quality and exceeding industry standards. Our unmatched approach to product innovation and precision guarantees exceptional project outcomes - every time.</p>
              </div>
              <div>
                <h3 className="Subtitle-2">Safety</h3>
                <p>The safety and well-being of our team members is our top priority. Our robust safety program ensures a culture of education and accident prevention at all operational levels. With an extensive 28-year collaboration with the Manufacturer's Health and Safety Association, we continuously enhance our safety standards. We actively seek input from external safety consultants and value the suggestions from our dedicated employees, driving constant improvement. </p>
              </div>
              <div>
                <h3 className="Subtitle-2">Reliability</h3>
                <p>Industry-leading structures begin with top-level partnerships. Our unwavering commitment to reliability ensures that we consistently deliver the highest quality products at competitive prices, meeting your timelines with precision. We approach every project with warmth, integrity, and a genuine desire to exceed your expectations.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ValuesSection