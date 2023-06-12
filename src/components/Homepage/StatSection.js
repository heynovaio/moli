import * as React from "react"
import { LineDivide, Stat, LineGraphic1} from '../../styles/pages/home.module.scss'
import TextBox from "../textbox"
import { StaticImage } from "gatsby-plugin-image"

const StatSection = (props) => {

  return (
    <section>
      <div className="Container">
        <div className="FlexWrap">
          <TextBox width={400}>
            <h2>
              Quality on every level
            </h2>
          </TextBox>
          <TextBox width={750}>
            <p className="BodyText">
            High standards are essential in all aspects of our daily operations for our expert team to design, fabricate and safely install structural steel. We work closely with our clients and suppliers to provide proven results with a commitment to excellence.
            </p>
          </TextBox>
        </div>
        <span className={LineDivide}/>
        <div className="FlexWrap" style={{alignItems: 'flex-start'}}>
          <div className={Stat}>
            <span>39</span>
            <p>Years in Business</p>
          </div>  

          <div className={Stat}>
            <span>80K</span>
            <p>Sq. ft. Manufacturing Facility</p>
          </div>

          <div className={Stat} style={{maxWidth: '350px'}}>
            <span>13YRS</span>
            <p>ISO 9001 Quality Management System</p>
          </div>

          <div className={Stat}>
            <span>95%+</span>
            <p>COR Safety Audit Scores</p>
          </div>
        </div>
      </div>
      <div className={LineGraphic1}>
        <StaticImage
          src="../../images/graphic-1.svg"
          alt=""
        />
      </div>
    </section>
  )
}

export default StatSection