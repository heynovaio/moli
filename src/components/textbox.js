import React from 'react';

const TextBox = (props) => {
  const {
    tAlign,
    width=Number,
    children,
    sticky,
  } = props
  return (
    <>
    {
      sticky 
      ? 
        <div className="textBox" style={{textAlign:tAlign, maxWidth:width, position: 'sticky', top: 0}}>
          {children}
        </div>
      :
        <div className="textBox" style={{textAlign:tAlign, maxWidth:width}}>
          {children}
        </div>
    } 
    </>
  )};

export default TextBox;