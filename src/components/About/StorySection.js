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
            <p className="BodyText">Moli Industries has firmly established itself as a reliable source for structural steel projects from design to assembly since it began operating in Calgary in 1984.&nbsp; A dynamic and ambitious group&nbsp;committed&nbsp;to open communication with clients and vendors, dedicated to it's quality management system to exceed the client expectations, and diligent to ensure the safety of employees, customers and vendors on our worksites. </p>
            <p className="BodyText">Our unwavering dedication to exceptional quality in all aspects of our operations, evident through the successful completion of over 1,000 projects, is crucial for our continuous growth and success. Our steadfast commitment to reliability and unmatched service has earned us a trusted reputation in the industry.

</p>
          </TextBox>
          <GatsbyImage image={image} alt="Employees smiling as they pose on a steel project in hardhats."/>
        </div>
      </div>
    </section>
  )
}

export default StorySection