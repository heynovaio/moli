import * as React from "react"
import { LineDivide, Stat } from '../../styles/pages/home.module.scss'
import TextBox from "../textbox"

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
            <p>
              High quality standards are essential in all aspects of our daily operations for our expert team to design, fabricate and safely install structural steel. We work closely with our clients and suppliers to establish our commitment to excellence.
            </p>
          </TextBox>
        </div>
        <span className={LineDivide}/>
        <div className="FlexWrap">
          <div className={Stat}>
            <span>39</span>
            <p>Years in Business</p>
          </div>  

          <div className={Stat}>
            <span>28</span>
            <p>Year MHSA Membership</p>
          </div>

          <div className={Stat}>
            <span>88K</span>
            <p>Sq. ft. Shop Space</p>
          </div>
          <div className={Stat}>
            <span>95%</span>
            <p>COR Score Average </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatSection