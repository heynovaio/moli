import * as React from "react"
import { HeroBackground } from '../../styles/pages/home.module.scss'
import TextBox from "../textbox"
import { Link } from "gatsby"

const HeroSection = (props) => {

  return (
    <section style={{position: 'relative'}}>
      <div className="Container">
        <TextBox width={624}>
          <h1>Expert Steel Fabricators</h1>
          <p>Delivering expert structural steel detailing, manufacturing and installation since 1984.</p>

            <Link to="/contact" className="BtnContained">
              Contact Us
            </Link>
      
          
        </TextBox>
      </div>
      
      <div className={HeroBackground}/>
    </section>
  )
}

export default HeroSection