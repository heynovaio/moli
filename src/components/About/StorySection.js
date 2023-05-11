import * as React from "react"
import TextBox from "../textbox"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const StorySection = (props) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "about-1.png"}) {
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
          <TextBox width={644}>
            <h2>OUR STORY</h2>
            <p className="BodyText">Ultricies ac gravida et dui. Arcu volutpat pretium consectetur sit dolor habitasse orci ut. Erat phasellus massa dolor vestibulum luctus mi nisl. Justo aliquet orci eleifend leo et. Vestibulum nibh nec ultrices at nunc varius id. At tincidunt eget posuere eu molestie non nulla.</p>
            <p className="BodyText">Ultricies ac gravida et dui. Arcu volutpat pretium consectetur sit dolor habitasse orci ut. Erat phasellus massa dolor vestibulum luctus mi nisl. Justo aliquet orci eleifend leo et. Vestibulum nibh nec ultrices at nunc varius id. At tincidunt eget posuere eu molestie non nulla.</p>
          </TextBox>
          <GatsbyImage image={image}/>
        </div>
      </div>
    </section>
  )
}

export default StorySection