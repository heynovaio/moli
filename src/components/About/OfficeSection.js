import * as React from "react"
import TextBox from "../textbox"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { CreditsList } from '../../styles/pages/about.module.scss'

const OfficeSection = (props) => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: {eq: "about-office-2.jpg"}) {
        childImageSharp {
          gatsbyImageData (
            width: 740
          )
        }
      }
      image2: file(relativePath: {eq: "about-office-3.jpg"}) {
        childImageSharp {
          gatsbyImageData (
            width: 740
          )
        }
      }
    }
  `)
  const image1 = getImage(data.image1)
  const image2 = getImage(data.image2)
  return (
    <section>
      <div className="Container">
        <div className="FlexWrap" style={{alignItems: 'flex-start'}}>
          <TextBox width={520} sticky>
            <h2>Affiliations</h2>
            <ul className={CreditsList}>
              <li><span>Engineering Associations:</span> British Columbia (APEGBC), Alberta (APEGA), Saskatchewan (APEGS), Manitoba (APEGM) and Ontario (PEO)</li>
              <li><span>Certifying Partners:</span> Manufacturers' Health and Safety Association (MHSA); COR Certified and Partnership in Injury Reduction (PIR)</li>
              <li><span>Accreditations:</span> Canadian Welding Bureau CSA Standard W47.1 and Quality Management System ISO 9001:2015 </li>
            </ul>  
            
          </TextBox>
          <div style={{display: 'flex', flexDirection: 'column', gap: 20}}>
            <GatsbyImage
              image={image1} alt="Building schematics"
            />
            <GatsbyImage
              image={image2} alt="A construction model"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default OfficeSection