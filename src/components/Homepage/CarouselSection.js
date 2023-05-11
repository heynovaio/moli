import { useStaticQuery, graphql, Link } from "gatsby"
import {  getImage } from "gatsby-plugin-image"
import * as React from "react"
import ProjectCard from "../projectCard";
import { useSnapCarousel } from "react-snap-carousel";
import { FaChevronLeft, FaChevronRight} from 'react-icons/fa'
import { SlideControl, CarouselNav, CarouselItem,  Index, BtnNav } from '../../styles/pages/home.module.scss'

const CarouselSection = (props) => {
  const { scrollRef, pages, activePageIndex, next, prev, goTo } =
  useSnapCarousel();

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
    }
  `)
  const image1 = getImage(data.image1)
  const image2 = getImage(data.image2)
  const image3 = getImage(data.image3)
  const image4 = getImage(data.image4)
  const image5 = getImage(data.image5)
  const image6 = getImage(data.image6)

  return (
    <section>
      <div className="Container">
        <div className={CarouselNav}>
          <div className={SlideControl}>
            <button onClick={() => prev()} aria-label="Prev" className={BtnNav}><FaChevronLeft/></button>
            <p className={Index}>{activePageIndex + 1} / {pages.length}</p> 
            <button onClick={() => next()} aria-label="Next" className={BtnNav}><FaChevronRight/></button>
          </div>
          <div>
            <Link to="/projects">
              See All
            </Link>
          </div>
        </div>
        <ul
          ref={scrollRef}
          style={{
            display: 'flex',
            overflow: 'auto',
            scrollSnapType: 'x mandatory',
            gap:'40px'
          }}
        >
          <li className={CarouselItem}>
            <ProjectCard
              image={image1}
              number='01'
              name='Project Name'
              description='Nunc nisl aliquam odio vitae odio adipiscing. Metus aenean amet a facilisis natoque.'
              type='commercial'
            />
          </li>
          <li className={CarouselItem}>
            <ProjectCard
              image={image2}
              number='02'
              name='Project Name'
              description='Nunc nisl aliquam odio vitae odio adipiscing. Metus aenean amet a facilisis natoque.'
              type='commercial'
            />
          </li>
          <li className={CarouselItem}>
            <ProjectCard
              image={image3}
              number='03'
              name='Project Name'
              description='Nunc nisl aliquam odio vitae odio adipiscing. Metus aenean amet a facilisis natoque.'
              type='commercial'
            />
          </li>
          <li className={CarouselItem}>
            <ProjectCard
              image={image4}
              number='04'
              name='Project Name'
              description='Nunc nisl aliquam odio vitae odio adipiscing. Metus aenean amet a facilisis natoque.'
              type='commercial'
            />
          </li>
          <li className={CarouselItem}>
            <ProjectCard
              image={image5}
              number='05'
              name='Project Name'
              description='Nunc nisl aliquam odio vitae odio adipiscing. Metus aenean amet a facilisis natoque.'
              type='commercial'
            />
          </li>
          <li className={CarouselItem}>
            <ProjectCard
              image={image6}
              number='06'
              name='Project Name'
              description='Nunc nisl aliquam odio vitae odio adipiscing. Metus aenean amet a facilisis natoque.'
              type='commercial'
            />
          </li> 
        </ul>
        
      </div>
    </section>
  )
}

export default CarouselSection