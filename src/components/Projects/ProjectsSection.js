import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import {  getImage } from "gatsby-plugin-image"
import { ProjectsGrid } from '../../styles/pages/projects.module.scss'

import ProjectCard from "../projectCard"
const ProjectsSection = (props) => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: {eq: "projects/project-1-1.JPG"}) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            width: 740
            height: 391
          )
        }
      }
      image2: file(relativePath: {eq: "projects/project-2-1.JPG"}) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            width: 740
            height: 391
          )
        }
      }
      image3: file(relativePath: {eq: "projects/project-3-1.JPG"}) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            width: 740
            height: 391
          )
        }
      }
      image4: file(relativePath: {eq: "projects/project-4-1.JPG"}) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            width: 740
            height: 391
          )
        }
      }
      image5: file(relativePath: {eq: "projects/project-5-1.JPG"}) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            width: 740
            height: 391
          )
        }
      }
      image6: file(relativePath: {eq: "projects/project-6-1.JPG"}) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            width: 740
            height: 391
          )
        }
      }
      image7: file(relativePath: {eq: "projects/project-7.png"}) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            width: 740
            height: 391
          )
        }
      }
      image8: file(relativePath: {eq: "projects/project-8.png"}) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            width: 740
            height: 391
          )
        }
      }
    }
  `)
  const image1 = getImage(data.image1)
  const image2 = getImage(data.image2)
  const image3 = getImage(data.image3)
  const image4 = getImage(data.image4)
  const image5 = getImage(data.image5)
  const image6 = getImage(data.image6)
  const image7 = getImage(data.image7)
  const image8 = getImage(data.image8)
  return (
    <section>
      <div className="Container">
        <h1>Featured Projects</h1>
        <div className={ProjectsGrid}>
          <ProjectCard
            image={image1}
            number='01'
            name='Ronmor Phase III Building Lift'
           
            expanded={{
              bio: "",
              images: []
            }}
          />
          <ProjectCard
            image={image2}
            number='02'
            name='Stampede Roundup Center Expansion'
            
            expanded={{
              bio: '',
              images: []
            }}
          />
          <ProjectCard
            image={image3}
            number='03'
            name='Chateau Lake Louise Conference Center Name'
           
            expanded={{
              bio: '',
              images: []
            }}
          />
          <ProjectCard
            image={image4}
            number='04'
            name='Northern Telecom Wireless Facility'
            expanded={{
              bio: '',
              images: []
            }}
          />
          <ProjectCard
            image={image5}
            number='05'
            name='Country Club of the Hamptons'

            expanded={{
              bio: '',
              images: []
            }}
          />
          <ProjectCard
            image={image6}
            number='06'
            name='Trail Community Center'
            expanded={{
              bio: '',
              images: []
            }}
          />  
          <ProjectCard
            image={image7}
            number='07'
            name='Custom work for private residence'
            expanded={{
              bio: '',
              images: []
            }}
          />
          <ProjectCard
            image={image8}
            number='08'
            name='Southern Alberta Institute of Technology'
            expanded={{
              bio: '',
              images: []
            }}
          />
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection