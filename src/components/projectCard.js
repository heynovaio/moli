import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import * as sty from '../styles/pages/projects.module.scss'
import {FaExpandAlt} from 'react-icons/fa'

const ProjectCard = (props) => {
  const {
    image,
    number,
    name,
    description,
    type,
    expanded, 
  } = props
  return (
    <div className={sty.Card}>
      <div className={sty.ImageWrap}>
        <GatsbyImage image={image}/>
        {expanded && 
          <div className={sty.Expand}>
            <FaExpandAlt/>
          </div>
        }
      </div>
      
      <div className={sty.Info}> 
        <span>{number}</span>
        <div>
          <p className={sty.Name}>{name}</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard