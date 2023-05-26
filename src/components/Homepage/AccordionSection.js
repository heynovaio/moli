import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
// import { Accordion, DetailsImage, DetailsContent } from '../../styles/pages/home.module.scss'
import * as sty from '../../styles/components/accordian.module.scss'
import TextBox from "../textbox"

const AccordionSection = (props) => {
  const data = useStaticQuery(graphql`
    query {
      main_image: file(relativePath: {eq: "what-we-do.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            width: 749
          )
        }
      }
      detail_1: file(relativePath: {eq: "detail_1.png"}) {
        childImageSharp {
          gatsbyImageData(
            width: 749
          )
        }
      }
      detail_2: file(relativePath: {eq: "detail_2.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            width: 749
          )
        }
      }
      detail_4: file(relativePath: {eq: "detail_4.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            width: 749
          )
        }
      }
    }
  `)
  const image = getImage(data.main_image)
  return (
    <section>
      <div className="Container">
        <div className="FlexWrap" style={{alignItems: 'flex-start', justifyContent: 'space-between', gap: '0'}}>
          <div style={{width: '50%', height: '100%'}}></div>
          <div className={sty.ContentBox}>
            <TextBox>
              <h2>Our Services</h2>
              <div className={sty.Accordion}>
                <details className={sty.Details1} open>
                  <div className={`${sty.DetailsImage} ${sty.DetailsImage_1}`}>
                    <GatsbyImage image={getImage(data.detail_1)} alt="A 3d model"/>
                  </div>
                  <summary>Detailing</summary>
                    Moli Industries uses the world leading Tekla Structures software to create extremely accurate and highly detailed 3D models of all our projects. These models are subsequently used to output shop & fabrication drawings, and the information is also transferred digitally to our beam manufacturing lines for automated measuring, cutting and drilling operations.
                </details>
                <details className={sty.Details2}>
                  <summary>Fabrication</summary>
                  <div className={`${sty.DetailsImage} ${sty.DetailsImage_2}`}>
                    <GatsbyImage image={getImage(data.detail_2)} alt="A welder working on a steel beam"/>
                  </div>
                  Our facility is CWB certified to W47.1 Division 1, with work performed by certified Journeyman Welders. Our shop features multiple state of the art, fully automated beam lines that incorporate high speed carbide
  drilling, large format band sawing and powerful plasma coping for accuracy to one tenth of a millimeter. 
                </details>
                <details className={sty.Details3}>
                  <summary>Installation</summary>
                    <div className={`${sty.DetailsImage} ${sty.DetailsImage_3}`}>
                      <GatsbyImage image={image} alt="A welder working"/>
                    </div>
                  Our highly skilled, CWB certified Journeymen Field crew has successfully erected a wide array of structural projects in Calgary and surrounding area, Western Canada and beyond. The accuracy of the manufactured products from our Shop allows our crew the capability to efficiently tackle any size project.
                </details>
                <details className={sty.Details4}>
                  <summary>Miscellaneous Steel</summary>
                  <div className={`${sty.DetailsImage} ${sty.DetailsImage_4}`}>
                  <GatsbyImage image={getImage(data.detail_4)} alt="A steel staircase"/>
                  </div>
                  At Moli Industries we can accommodate and produce a wide selection of miscellaneous steel requests including modifications and upgrades to serve our clients. Common services include ladders, handrails, stairs and many other mild steel products.
                </details>
              </div>
              
            </TextBox>
          </div>
        </div>
      </div>

    </section>
  )
}

export default AccordionSection