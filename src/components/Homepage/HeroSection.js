import * as React from "react"
import { HeroBackground, Hero } from '../../styles/pages/home.module.scss'
import TextBox from "../textbox"
import { Link } from "gatsby"

const HeroSection = (props) => {

  return (
    <section className={Hero} style={{position: 'relative'}}>
      <div className="Container">
        <TextBox width={624}>
          <h1>Experts in Structural Steel</h1>
          <p className="BodyText">Delivering quality results in structural steel detailing, manufacturing and installation since 1984.</p>

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