import * as React from "react"
import TextBox from "../textbox"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { PointGrid } from '../../styles/pages/about.module.scss'

const DifferenceSection = (props) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "about-3.png"}) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `)
  const image = getImage(data.file)
  return (
    <section>
      <div className="Container">
        <div className="FlexWrap">
          <GatsbyImage image={image} alt="Workers working on a building project." />
          <TextBox width={752}>
            <h2>Shared Values</h2>
            <div className={PointGrid}>
              <div>
                <h3 className="Subtitle-2">Quality</h3>
                <p>We are committed to quality in all aspects of the commercial steel industry. Going beyond current compliance laws and regulations, we seek continuous opportunities for improvement to provide safe, accurate, and timely project solutions.</p>
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
          </TextBox>
        </div>
      </div>
    </section>
  )
}

export default DifferenceSection