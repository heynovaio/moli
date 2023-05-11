import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Accordion } from '../../styles/pages/home.module.scss'
import TextBox from "../textbox"

const AccordionSection = (props) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "what-we-do.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            width: 749
          )
        }
      }
    }
  `)
  const image = getImage(data.file)
  return (
    <section>
      <div className="Container">
        <div className="FlexWrap" style={{alignItems: 'flex-start'}}>
          <GatsbyImage image={image}/>
          <TextBox width={644}>
            <h2>Our Services</h2>
            <div className={Accordion}>
              <details>
                <summary>Detailing</summary>
                Moli Industries uses the world leading Tekla Structures software to create extremely accurate and highly detailed 3D models of all our projects. These models are subsequently used to output shop & fabrication drawings, and the information is also transferred digitally to our beam manufacturing lines for automated measuring, cutting and drilling operations.
              </details>
              <details>
                <summary>Fabrication</summary>
                Our facility is CWB certified to W47.1 Division 1, with work performed by certified Journeyman Welders. Our shop features multiple state of the art, fully automated beam lines that incorporate high speed carbide
drilling, large format band sawing and powerful plasma coping for accuracy to one tenth of a millimeter. 
              </details>
              <details>
                <summary>Installation</summary>
                Our highly skilled, CWB certified Journeymen Field crew has successfully erected a wide array of structural projects in Calgary and surrounding area, Western Canada and beyond. The accuracy of the manufactured products from our Shop allows our crew the capability to efficiently tackle any size project.
              </details>
              <details>
                <summary>Miscellaneous Steel</summary>
                At Moli Industries we can accommodate and produce a wide selection of miscellaneous steel requests including modifications and upgrades to serve our clients. Common services include ladders, handrails, stairs and many other mild steel products.
              </details>
            </div>
            
          </TextBox>
        </div>
      </div>

    </section>
  )
}

export default AccordionSection