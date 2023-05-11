import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Accordion } from '../../styles/pages/home.module.scss'
import TextBox from "../textbox"

const AccordionSection = (props) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "what-we-do.png"}) {
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
        <div className="FlexWrap" style={{alignItems: 'flex-start'}}>
          <GatsbyImage image={image}/>
          <TextBox width={644}>
            <h2>WHAT WE DO</h2>
            <div className={Accordion}>
              <details>
                <summary>Detailing</summary>
                Nunc nisl aliquam odio vitae odio adipiscing. Metus aenean amet a facilisis natoque.'
                type='commercial
              </details>
              <details>
                <summary>Fabrication</summary>
                Nunc nisl aliquam odio vitae odio adipiscing. Metus aenean amet a facilisis natoque.'
                type='commercial
              </details>
              <details>
                <summary>Installation</summary>
                Nunc nisl aliquam odio vitae odio adipiscing. Metus aenean amet a facilisis natoque.'
                type='commercial
              </details>
              <details>
                <summary>Miscellaneous Steel</summary>
                Nunc nisl aliquam odio vitae odio adipiscing. Metus aenean amet a facilisis natoque.'
                type='commercial
              </details>
            </div>
            
          </TextBox>
        </div>
      </div>

    </section>
  )
}

export default AccordionSection