import * as React from "react"
import TextBox from "../textbox"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const AboutSection = (props) => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: {eq: "about_1.JPG"}) {
        childImageSharp {
          gatsbyImageData (
            width: 800
          )
        }
      }
      image2: file(relativePath: {eq: "about_2.JPG"}) {
        childImageSharp {
          gatsbyImageData (
            width: 800
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
            <h2>Quality Assured</h2>
            <p className="BodyText">Moli is your source for exceptional structural steel solutions in Calgary and beyond. With nearly 40 years of industry expertise, Moli Industries Ltd. has established itself as a force in Western Canada's construction landscape.
Our comprehensive services cover everything from structural engineering design and manufacturing to structural steel erection and miscellaneous steel fabrication. We take great pride in our dedicated team of highly skilled, CWB-certified welders and ironworkers who consistently deliver outstanding projects that push the boundaries of what structural steel can achieve. Integrity is at the core of our values, so we have numerous industry certifications including, CWB W47.1 Division 1 certification.</p>
            
          </TextBox>
          <div style={{display: 'flex', flexDirection: 'column', gap: 20}}>
            <GatsbyImage
              image={image1} alt="Moli Industries office building"
            />
            <GatsbyImage
              image={image2} alt="An image of manufactoring machinery"
            />
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default AboutSection