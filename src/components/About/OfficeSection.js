import * as React from "react"
import TextBox from "../textbox"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const OfficeSection = (props) => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: {eq: "office-1.png"}) {
        childImageSharp {
          gatsbyImageData
        }
      }
      image2: file(relativePath: {eq: "office-2.png"}) {
        childImageSharp {
          gatsbyImageData
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
            <h2>OUR OFFICE</h2>
            <p>Ultricies ac gravida et dui. Arcu volutpat pretium consectetur sit dolor habitasse orci ut. Erat phasellus massa dolor vestibulum luctus mi nisl. Justo aliquet orci eleifend leo et. Vestibulum nibh nec ultrices at nunc varius id. At tincidunt eget posuere eu molestie non nulla.</p>

            <p>Ultricies ac gravida et dui. Arcu volutpat pretium consectetur sit dolor habitasse orci ut. Erat phasellus massa dolor vestibulum luctus mi nisl. Justo aliquet orci eleifend leo et. Vestibulum nibh nec ultrices at nunc varius id. At tincidunt eget posuere eu molestie non nulla.</p>
            <Link to="/about" className="BtnContained">
              Learn More
            </Link>
            
          </TextBox>
          <div style={{display: 'flex', flexDirection: 'column', gap: 20}}>
            <GatsbyImage
              image={image1}
            />
            <GatsbyImage
              image={image2}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default OfficeSection