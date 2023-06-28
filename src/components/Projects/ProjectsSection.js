import * as React from "react"
import {  getImage, StaticImage } from "gatsby-plugin-image"
import { ProjectsGrid } from '../../styles/pages/projects.module.scss'

import ProjectCard from "../projectCard"
import { ProjectImages } from "../../hooks/project-image-hooks"

const ProjectsSection = (props) => {
  const data = ProjectImages()

  const image1_1 = getImage(data.image1_1)
  const image1_2 = getImage(data.image1_2)
  const image1_3 = getImage(data.image1_3)
  const image2_1 = getImage(data.image2_1)
  const image2_2 = getImage(data.image2_2)
  const image2_3 = getImage(data.image2_3)
  const image3_1 = getImage(data.image3_1)
  const image3_2 = getImage(data.image3_2)
  const image3_3 = getImage(data.image3_3)
  const image4_1 = getImage(data.image4_1)
  const image4_2 = getImage(data.image4_2)
  const image4_3 = getImage(data.image4_3)
  const image5_1 = getImage(data.image5_1)
  const image5_2 = getImage(data.image5_2)
  const image5_3 = getImage(data.image5_3)
  const image5_4 = getImage(data.image5_4)
  const image5_5 = getImage(data.image5_5)
  const image6_1 = getImage(data.image6_1)
  const image6_2 = getImage(data.image6_2)
  const image6_3 = getImage(data.image6_3)
  const image7_1 = getImage(data.image7_1)
  const image7_2 = getImage(data.image7_2)
  const image7_3 = getImage(data.image7_3)
  const image7_4 = getImage(data.image7_4)
  const image7_5 = getImage(data.image7_5)
  const image7_6 = getImage(data.image7_6)
  const image8_1 = getImage(data.image8_1)
  const image8_2 = getImage(data.image8_2)
  const image8_3 = getImage(data.image8_3)
  const image8_4 = getImage(data.image8_4)
  const image9_1 = getImage(data.image9_1)
  const image9_2 = getImage(data.image9_2)
  const image9_3 = getImage(data.image9_3)
  const image9_4 = getImage(data.image9_4)
  const image10_1 = getImage(data.image10_1)
  const image10_2 = getImage(data.image10_2)
  const image10_3 = getImage(data.image10_3)
  const image10_4 = getImage(data.image10_4)
  const image10_5 = getImage(data.image10_5)
  const image10_6 = getImage(data.image10_6)
  const image10_7 = getImage(data.image10_7)
  const misc_1 = getImage(data.misc_1)
  const misc_2 = getImage(data.misc_2)
  const misc_3 = getImage(data.misc_3)
  const misc_4 = getImage(data.misc_4)
  const misc_5 = getImage(data.misc_5)
  const misc_6 = getImage(data.misc_6)
  const misc_7 = getImage(data.misc_7)
  const misc_8 = getImage(data.misc_8)
  const misc_9 = getImage(data.misc_9)
  const misc_10 = getImage(data.misc_10)
  const misc_11 = getImage(data.misc_11)
  const misc_12 = getImage(data.misc_2)

  return (
    <section>
      <div className="LineGraphic3">
        <StaticImage
          src="../../images/graphic-3.svg"
          alt=""
        />
      </div>
      <div className="Container">
        <h1>Featured Projects</h1>
        <div className={ProjectsGrid}>
          <ProjectCard
            image={image7_1}
            number='01'
            name='Custom work for private residence'
            expanded={{
              bio: `<div>Moli has worked on many residential structures over the years, from large multi-family projects to single-family detached homes.&nbsp;</div><div>The single-family homes are often the most interesting and challenging projects, as they require close coordination with trades to meet very strict requirements. There are all sorts of challenges that can be involved in these projects, from meeting extremely strict floor depth requirements to having floating artistic stairs without any intermediate structural supports.</div>`,
              additionalImages: [image7_2,image7_3,image7_4, image7_5, image7_6]
            }}
          />
           <ProjectCard
            image={image9_1}
            number='02'
            name='Cochrane Automotive Storage'
            expanded={{
              bio: `<div></div>`,
              additionalImages: [image9_2,image9_3,image9_4]
            }}
          /> 
           <ProjectCard
            image={image10_5}
            number='03'
            name='Calgary Airport Casino'
            expanded={{
              bio: `<div></div>`,
              additionalImages: [image10_6, image10_7, image10_1, image10_2,image10_3,image10_4]
            }}
          /> 
          <ProjectCard
            image={image1_1}
            number='04'
            name='Ronmor Phase III Building Lift'
           
            expanded={{
              bio: '<div>This challenging project involved a last-minute change from a one-storey building to a two-storey building, after the structural steel and metal deck had already been completed.&nbsp;<div><br><div>To accomplish this, the roof structure was cut into large sections, reinforced as required, then removed and set aside. A floor structure was built below, then the roof sections were craned back into place above.<br></div></div></div>',
              additionalImages: [image1_2,image1_3]
            }}
          />
          <ProjectCard
            image={image2_1}
            number='05'
            name='Stampede Roundup Center Expansion'
            
            expanded={{
              bio: `<div>Long known as an iconic component of the Calgary Stampede facilities, the original structural steel construction of the current BMO Centre was completed by Moli Industries in 1999.&nbsp;</div><div><div>Our scope of work included:<br><div><ul><li>approximately $4 million in steel</li><li>main columns in the built up sections are approximately 16,000 lbs. each</li><li>main trusses are over 65,000 lbs. each with 170' clear span, 30' deep, and over 1,000 bolts per truss</li><li>Extensive suspended catwalk systems within the roof system</li></ul></div></div></div>`,
              additionalImages: [image2_2,image2_3]
            }}
          />
          <ProjectCard
            image={image3_1}
            number='06'
            name='Chateau Lake Louise Conference Center'
           
            expanded={{
              bio: `<div><p>Located in the Mount Temple Wing of the Fairmont Chateau Lake Louise Hotel, this premiere conference center serves as the meeting point for a wide variety of organizations and corporations.</p>
              <p>The structural steel for this work was a challenge, due to access limitations to allow a large enough crane to be mobilized for the steel installation. Instead, a smaller crane was brought in to bring the steel in to one end of the building, and an innovative hand-cranking system was used to slowly move the steel into place.<p></div>`,
              additionalImages: [image3_2,image3_3]
            }}
          />
          <ProjectCard
            image={image4_1}
            number='07'
            name='Northern Telecom Wireless Facility'
            expanded={{
              bio: `<div><p>Our work on this project was completed for Nortel Networks in 1995. In 2009 it became the Calgary Police Service Headquarters.</p><p>As this was during the peak business period for Nortel, the project was extremely demanding on results, in particular the schedule. This resulted in our crews working over 30' in the air in -30 degree weather to meet the client requirements. For our ability to meet their extreme demands without sacrificing quality, Moli received multiple awards for this work, including the&nbsp; Steve Phelps Mission Impossible Award from the Royal Architectural Order of Westwinds.</p>
              <p>Our scope of work:</p><ul><li>Over 300,00 square feet, comprised of a two story
              office space with an attached warehouse</li></ul>
              <p>Additional Electro-Magnetic Chamber, 44' x 60' structure, 44' high constructed in 1997</p>`,
              additionalImages: [image4_2,image4_3]
            }}
          />
          <ProjectCard
            image={image5_1}
            number='08'
            name='Country Club of the Hamptons'

            expanded={{
              bio: `<div><div>The Country Club of the Hamptons is a remarkable private 18 hole golf course tucked in Calgary's NW community of the Hamptons.&nbsp;</div><div>This project was a work of pride for Moli, involving innovative design-build approaches to create 20' roof cantilevers all around the building, as well as a feature open-riser steel spiral staircase.&nbsp;</div></div>`,
              additionalImages: [image5_3, image5_4, image5_5]
            }}
          />
          <ProjectCard
            image={image6_1}
            number='09'
            name='Trail Community Center'
            expanded={{
              bio: `<div>This project involved design &amp; construction of a 3-dimensional truss system to support the large spanning roof areas.</div><div>Similar to the Chateau Lake Louise Meeting Conference Centre, the site work on this project was limited by access, and a large crane could not be brought in to install the steel. Creative approaches to the installation were required to complete this work.</div>`,
              additionalImages: [image6_2,image6_3]
            }}
          />  
          <ProjectCard
            image={image8_1}
            number='10'
            name='Southern Alberta Institute of Technology'
            expanded={{
              bio: `<div><div>The post-secondary institution underwent an expansion in 2001.</div><div>Our scope of work:</div><div><ul><li><div>Approximately $1.5 million in steel work</div></li><li>Long span trusses, about 120’ in length</li><li><div>Very heavy interior steel work for Heritage Building</div></li></ul></div></div>`,
              additionalImages: [image8_2,image8_3,image8_4]
            }}
          /> 
          <ProjectCard
            image={misc_1}
            number='11'
            name='Miscellaneous Steel'
            expanded={{
              bio: '',
              additionalImages: [misc_2,misc_3,misc_4,misc_5,misc_6,misc_7,misc_8,misc_9,misc_10,misc_11,misc_12]
            }}
          /> 
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection