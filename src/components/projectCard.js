import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import * as sty from '../styles/pages/projects.module.scss'
import {FaExpandAlt} from 'react-icons/fa'
import TextBox from "./textbox"

const ProjectCard = (props) => {
  const {
    image,
    number,
    name,
    description,
    type,
    expanded, 
  } = props
  console.log(expanded?.additionalImages)
  const [expandState, setExpandState] = React.useState(false)
  function replaceWithBr() {
    return expanded?.bio.replace(/\n/g, "<br />")
  }
   
  return (
    <>
    
      <div className={sty.Card}>
        <div className={sty.ImageWrap}>
          <GatsbyImage image={image}/>
          {expanded && 
            <button className={sty.Expand} onClick={() => setExpandState(!expandState)}>
              <FaExpandAlt/>
            </button>
          }
        </div>
        
        <div className={sty.Info}> 
          <span>{number}</span>
          <div>
            <p className={sty.Name}>{name}</p>
            <p>{description}</p>
            <p>{type}</p>
          </div>
        </div>
      </div>
      {
        expandState &&
        <div className={sty.BioWrap}>
          <div className={sty.Bio}>
            <div className={sty.BioTop}>
              <button className={sty.hamburger} onClick={() => setExpandState(!expandState)} tabIndex={0}>
                <span className={sty.bar}/>
                <span className={sty.bar}/>
              </button>
            </div>
            <div className="FlexWrap" style={{alignItems: 'stretch', gap: 30, justifyContent: 'space-evenly'}}>
              <TextBox width={411}>
                <p className={sty.Name}>{name}</p>
                <p>{description}</p>
                <p dangerouslySetInnerHTML={{__html: replaceWithBr()}}/>
              </TextBox>
              <div className={sty.BioImages}>
                <GatsbyImage image={image}/>
                {expanded?.additionalImages?.map((img,index) => (
                  <GatsbyImage image={img} key={index}/>
                ))}
              </div>
            </div>
          </div>
          <div className={sty.BioBack} onClick={() => setExpandState(!expandState)} tabIndex={0}/>
        </div>
      }
      
    </>
  )
}

export default ProjectCard