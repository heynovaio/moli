import * as React from "react"
import {AboutSection, AboutTitle} from '../../styles/pages/about.module.scss'

const HeroSection = (props) => {

  return (
    <section className={AboutSection}>
      <div className="Container">
        <div className={AboutTitle}>
          <h1>ABOUT US</h1>
        </div>   
      </div>
    </section>
  )
}

export default HeroSection