import * as React from "react"
import TextBox from "../textbox"
import { useStaticQuery, graphql, Link } from "gatsby"
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
            <p className="BodyText">Moli Industries has firmly established itself as a reliable source for structural steel projects from design to assembly since it began operating in Calgary in 1984.  A dynamic and ambitious group committed to open communication with clients and vendors, dedicated to it's quality management system to exceed the client expectations, and diligent to ensure the safety of employees, customers and vendors on our worksites.</p>
            <Link to="/about" className="BtnContained">
              Learn More
            </Link>
            
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