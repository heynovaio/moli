import React from 'react';
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';

const ImageBox = ({ image, width=Number, height=Number, borderRadius=Number, placeholder=false, srcUrl, aspect=String }) => {  
  const calcAspect = image?.dimensions ? `${image.dimensions.width} / ${image.dimensions.height}` : aspect ? `${aspect}` : '1/1';

  const styles = {
    width:width, 
    height:height, 
    borderRadius:borderRadius, 
    aspectRatio: calcAspect,
  }
  return (
    <div className="imageBox" style={styles}>
      {
        image ? 
        <GatsbyImage
          className="imageItem"
          image={image?.gatsbyImageData}
          alt={image?.alt || ""}
          layout="fixed"
          placeholder="blurred"

        /> :
        (srcUrl && srcUrl?.length > 0) ?
        <img
          className="imageItem airTableImg"
          src={srcUrl}
          alt=""
        /> :
        <StaticImage
          className="imageItem"
          alt=""
          src='./../images/Placeholder.png'
        />
      }
     
    </div>
  )};

export default ImageBox;