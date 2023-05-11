import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import {  getImage } from "gatsby-plugin-image"
import { ProjectsGrid } from '../../styles/pages/projects.module.scss'

import ProjectCard from "../projectCard"
const ProjectsSection = (props) => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: {eq: "projects/project-1.png"}) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      image2: file(relativePath: {eq: "projects/project-2.png"}) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      image3: file(relativePath: {eq: "projects/project-3.png"}) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      image4: file(relativePath: {eq: "projects/project-4.png"}) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      image5: file(relativePath: {eq: "projects/project-5.png"}) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      image6: file(relativePath: {eq: "projects/project-6.png"}) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      image7: file(relativePath: {eq: "projects/project-7.png"}) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      image8: file(relativePath: {eq: "projects/project-8.png"}) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
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
        <h1>PROJECTS</h1>
        <div className={ProjectsGrid}>
          <ProjectCard
            image={image1}
            number='01'
            name='Project Name'
            description='Nunc nisl aliquam odio vitae odio adipiscing. Metus aenean amet a facilisis natoque.'
            type='commercial'
            expanded={{
              bio: bio,
              additionalImages: [image9,image10]
            }}
          />
          <ProjectCard
            image={image2}
            number='02'
            name='Project Name'
            description='Nunc nisl aliquam odio vitae odio adipiscing. Metus aenean amet a facilisis natoque.'
            type='commercial'
            expanded={{
              bio: bio,
              additionalImages: [image9,image10]
            }}
          />
          <ProjectCard
            image={image3}
            number='03'
            name='Project Name'
            description='Nunc nisl aliquam odio vitae odio adipiscing. Metus aenean amet a facilisis natoque.'
            type='commercial'
            expanded={{
              bio: bio,
              additionalImages: [image9,image10]
            }}
          />
          <ProjectCard
            image={image4}
            number='04'
            name='Project Name'
            description='Nunc nisl aliquam odio vitae odio adipiscing. Metus aenean amet a facilisis natoque.'
            type='commercial'
            expanded={{
              bio: bio,
              additionalImages: [image9,image10]
            }}
          />
          <ProjectCard
            image={image5}
            number='05'
            name='Project Name'
            description='Nunc nisl aliquam odio vitae odio adipiscing. Metus aenean amet a facilisis natoque.'
            type='commercial'
            expanded={{
              bio: bio,
              additionalImages: [image9,image10]
            }}
          />
          <ProjectCard
            image={image6}
            number='06'
            name='Project Name'
            description='Nunc nisl aliquam odio vitae odio adipiscing. Metus aenean amet a facilisis natoque.'
            type='commercial'
            expanded={{
              bio: bio,
              additionalImages: [image9,image10]
            }}
          />
          <ProjectCard
            image={image7}
            number='07'
            name='Project Name'
            description='Nunc nisl aliquam odio vitae odio adipiscing. Metus aenean amet a facilisis natoque.'
            type='commercial'
            expanded={{
              bio: bio,
              additionalImages: [image9,image10]
            }}
          />
          <ProjectCard
            image={image8}
            number='08'
            name='Project Name'
            description='Nunc nisl aliquam odio vitae odio adipiscing. Metus aenean amet a facilisis natoque.'
            type='commercial'
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