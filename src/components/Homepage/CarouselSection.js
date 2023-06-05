import { useStaticQuery, graphql, Link } from "gatsby"
import {  getImage } from "gatsby-plugin-image"
import * as React from "react"
import ProjectCard from "../projectCard";
import { useSnapCarousel } from "react-snap-carousel";
import { FaChevronLeft, FaChevronRight} from 'react-icons/fa'
import { SlideControl, CarouselNav, carousel, CarouselItem,  Index, BtnNav, WorkTitle } from '../../styles/pages/home.module.scss'
import TextBox from "../textbox"

const CarouselSection = (props) => {
  const { scrollRef, pages, activePageIndex, next, prev } =
  useSnapCarousel();

  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: {eq: "projects/project-7-1.webp"}) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            width: 740
            height: 391
          )
        }
      }
      image2: file(relativePath: {eq: "projects/project-9-1.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            width: 740
            height: 391
          )
        }
      }
      image3: file(relativePath: {eq: "projects/project-10-1.jpg"}) {
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
  // const image4 = getImage(data.image4)

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
          tabIndex="0"
        >
          <li className={CarouselItem}>
            <ProjectCard
              image={image1}
              number='01'
              name='Custom work for private residence'
              
            />
          </li>
          <li className={CarouselItem}>
            <ProjectCard
              image={image2}
              number='02'
              name='Cochrane Automotive Storage'
             
            />
          </li>
          <li className={CarouselItem}>
            <ProjectCard
              image={image3}
              number='03'
              name='Calgary Airport Casino'
            />
          </li>
          {/* <li className={CarouselItem}>
            <ProjectCard
              image={image4}
              number='04'
              name='Northern Telecom Wireless Facility'
              description='Nunc nisl aliquam odio vitae odio adipiscing. Metus aenean amet a facilisis natoque.'
              type='commercial'
            />
          </li> */}
        </ul>
        
      </div>
    </section>
  )
}

export default CarouselSection