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
      image9: file(relativePath: {eq: "projects/additional-1.png"}) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      image10: file(relativePath: {eq: "projects/additional-2.png"}) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
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
  const image9 = getImage(data.image9)
  const image10 = getImage(data.image10)

  const bio = `Tristique tristique non elit ac at. Tincidunt nunc odio lectus pellentesque lacinia amet pharetra. Sed lobortis quam praesent in sed. Ultrices feugiat tortor consectetur turpis. Lorem auctor ac ipsum duis fringilla laoreet. Fames venenatis amet lectus tellus amet sollicitudin eu non. \n\n
  
  Nisl massa est porta urna eget et mauris nam. Lobortis massa at varius lectus lectus eleifend dapibus lectus adipiscing. Feugiat nullam in elit pretium volutpat accumsan faucibus. Tortor sit viverra lacus urna tempus nunc tellus. Sed ipsum in eu condimentum. Curabitur accumsan sagittis sed amet amet et turpis tincidunt. Risus at ut ipsum et malesuada eget nulla.\n\n
  
  Vitae mollis est dictum senectus sit id. Elit sed ullamcorper lectus sit elit ac nunc. Donec convallis in purus pellentesque amet tempor donec. Fermentum risus pulvinar aliquam convallis cras viverra. Ligula et vitae non vestibulum molestie sed a aliquet pharetra. Bibendum placerat facilisi varius nisl vitae non. Proin adipiscing pretium fames nulla duis in.`

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
              bio: 'This challenging project involved a last-minute change from a one-storey building to a two-storey building, after the structural steel and metal deck had already been completed. To accomplish this, the roof structure was cut into large sections, reinforced as required, then removed and set aside. A floor structure was built below, then the roof sections were craned back into place above.',
              additionalImages: [image9,image10]
            }}
          />
          <ProjectCard
            image={image2}
            number='02'
            name='Stampede Roundup Center Expansion'
            
            expanded={{
              bio: 'Long known as an iconic component of the Calgary Stampede facilities, the original structural steel construction of the current BMO Centre was completed by Moli Industries in 1999. Our scope of work included:approximately $4 million in steelmain columns in the built up sections are approximately 16,000 lbs. eachmain trusses are over 65,000 lbs. each with 170' clear span, 30' deep, and over 1,000 bolts per trussExtensive suspended catwalk systems within the roof system',
              additionalImages: [image9,image10]
            }}
          />
          <ProjectCard
            image={image3}
            number='03'
            name='Chateau Lake Louise Conference Center Name'
           
            expanded={{
              bio: bio,
              additionalImages: [image9,image10]
            }}
          />
          <ProjectCard
            image={image4}
            number='04'
            name='Northern Telecom Wireless Facility'
            expanded={{
              bio: bio,
              additionalImages: [image9,image10]
            }}
          />
          <ProjectCard
            image={image5}
            number='05'
            name='Country Club of the Hamptons'

            expanded={{
              bio: bio,
              additionalImages: [image9,image10]
            }}
          />
          <ProjectCard
            image={image6}
            number='06'
            name='Trail Community Center'
            expanded={{
              bio: bio,
              additionalImages: [image9,image10]
            }}
          />  
          <ProjectCard
            image={image7}
            number='07'
            name='Custom work for private residence'
            expanded={{
              bio: bio,
              additionalImages: [image9,image10]
            }}
          />
          <ProjectCard
            image={image8}
            number='08'
            name='Southern Alberta Institute of Technology'
            expanded={{
              bio: bio,
              additionalImages: [image9,image10]
            }}
          />
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection