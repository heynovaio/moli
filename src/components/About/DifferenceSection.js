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
          <GatsbyImage image={image}/>
          <TextBox width={752}>
            <h2>HOW WE ARE DIFFERENT</h2>
            <div className={PointGrid}>
              <div>
                <p className="Subtitle-2">SAFETY</p>
                <p>Ut porta nibh tellus sed vitae fringilla id est mauris. Aliquam magnis fringilla tristique et quam. Vitae orci lectus egestas augue arcu mattis placerat nunc.</p>
              </div>
              <div>
                <p className="Subtitle-2">PERFORMANCE</p>
                <p>Ut porta nibh tellus sed vitae fringilla id est mauris. Aliquam magnis fringilla tristique et quam. Vitae orci lectus egestas augue arcu mattis placerat nunc.</p>
              </div>
              <div>
                <p className="Subtitle-2">QUALITY</p>
                <p>Ut porta nibh tellus sed vitae fringilla id est mauris. Aliquam magnis fringilla tristique et quam. Vitae orci lectus egestas augue arcu mattis placerat nunc.</p>
              </div>
              <div>
                <p className="Subtitle-2">RELIABILITY</p>
                <p>Ut porta nibh tellus sed vitae fringilla id est mauris. Aliquam magnis fringilla tristique et quam. Vitae orci lectus egestas augue arcu mattis placerat nunc.</p>
              </div>
            </div>
          </TextBox>
        </div>
      </div>
    </section>
  )
}

export default DifferenceSection