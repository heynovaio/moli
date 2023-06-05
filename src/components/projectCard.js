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
    expanded, 
  } = props
  const [expandState, setExpandState] = React.useState(false)

  // function replaceWithBr() {
  //   return expanded?.bio.replace(/\n/g, "<br />")
  // }
  function findHeight(){
    if (typeof document !== `undefined`) {
      return document?.body.offsetHeight
    } else {
      return '100vh'
    }
  }

  // const wide = {
  //   aspectRatio: '700/426'
  // }
  // const tall = {
  //   aspectRatio: '342/408'
  // }
  return (
    <>
    
      <div className={sty.Card}>
        <div className={sty.ImageWrap}>
          <GatsbyImage image={image} style={{aspectRatio:'740/390'}} alt=""/>
          {expanded && 
            <button className={sty.Expand} onClick={() => setExpandState(!expandState)} aria-label='Expand Project Info'>
              <FaExpandAlt/>
            </button>
          }
        </div>
        
        <div className={sty.Info}> 
          <span>{number}</span>
          <div>
            <p className={sty.Name}>{name}</p>
          </div>
        </div>
      </div>
      {
        expandState &&
        <div className={sty.BioWrap}  >
          <div className={sty.Bio} >
            <div className={sty.BioInner}>
              <div className={sty.BioTop}>
                <button className={sty.hamburger} onClick={() => setExpandState(!expandState)} tabIndex={0} aria-label='Close Content'>
                  <span className={sty.bar} aria-hidden='true'/>
                  <span className={sty.bar} aria-hidden='true'/>
                </button>
              </div>
              <div className="FlexWrap" style={{alignItems: 'stretch', gap: 30, justifyContent: 'space-evenly', flexWrap: 'wrap'}}>
                <TextBox width={411}>
                  <p className={sty.Name}>{name}</p>
                  <div dangerouslySetInnerHTML={{__html: expanded?.bio}}/>
                </TextBox>
                <div className={sty.BioImages}>
                  <GatsbyImage image={image}/>
                  {expanded?.additionalImages?.map((img,index) => (
                    // <GatsbyImage image={img} key={index} style={index % 3 === 2 ? tall : wide}/>
                    <GatsbyImage image={img} key={index}/>
                  ))}
                </div>
              </div>
            </div>     
          </div>
          <div className={sty.BioBack} onClick={() => setExpandState(!expandState)} tabIndex={0} style={{height: findHeight()}} role="button" aria-label="Close content"/>
        </div>
      }
      
    </>
  )
}

export default ProjectCard