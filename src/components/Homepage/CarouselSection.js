import { useStaticQuery, graphql, Link } from "gatsby"
import {  getImage } from "gatsby-plugin-image"
import * as React from "react"
import ProjectCard from "../projectCard";
import { useSnapCarousel } from "react-snap-carousel";
import { FaChevronLeft, FaChevronRight} from 'react-icons/fa'
import { SlideControl, CarouselNav, carousel, CarouselItem,  Index, BtnNav, WorkTitle } from '../../styles/pages/home.module.scss'
import TextBox from "../textbox"

const CarouselSection = (props) => {
  const { scrollRef, pages, activePageIndex, next, prev, goTo } =
  useSnapCarousel();

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
      image4: file(relativePath: {eq: "projects/project-4-1.jpg"}) {
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

  return (
    <section className={carousel}>
      <div className="Container">
        <TextBox width={400}>
          <h2 className={WorkTitle}>
            Our Work
          </h2>
        </TextBox>
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
            gap:'30px'
          }}
        >
          <li className={CarouselItem}>
            <ProjectCard
              image={image1}
              number='01'
              name='Ronmor Phase III Building Lift'
              
            />
          </li>
          <li className={CarouselItem}>
            <ProjectCard
              image={image2}
              number='02'
              name='Stampede Roundup Center Expansion'
             
            />
          </li>
          <li className={CarouselItem}>
            <ProjectCard
              image={image3}
              number='03'
              name='Chateau Lake Louise Conference Center Name'

            />
          </li>
          <li className={CarouselItem}>
            <ProjectCard
              image={image4}
              number='04'
              name='Northern Telecom Wireless Facility'
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