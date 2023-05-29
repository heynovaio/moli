import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
// import { Accordion, DetailsImage, DetailsContent } from '../../styles/pages/home.module.scss'
import * as sty from '../../styles/components/accordian.module.scss'
import TextBox from "../textbox"


const AccordionSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onTitleClick = (index) => {
    setActiveIndex(index);
  };

  const data = useStaticQuery(graphql`
    query {
      detail_3: file(relativePath: {eq: "what-we-do.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            width: 749
          )
        }
      }
      detail_1: file(relativePath: {eq: "detail_1.png"}) {
        childImageSharp {
          gatsbyImageData(
            width: 749
          )
        }
      }
      detail_2: file(relativePath: {eq: "detail_2.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            width: 749
          )
        }
      }
      detail_4: file(relativePath: {eq: "detail_4.jpg"}) {
        childImageSharp {
          gatsbyImageData(
            width: 749
          )
        }
      }
    }
  `)

  const items = [
    {
      title: "Detailing",
      content: "Moli Industries uses the world leading Tekla Structures software to create extremely accurate and highly detailed 3D models of all our projects. These models are subsequently used to output shop & fabrication drawings, and the information is also transferred digitally to our beam manufacturing lines for automated measuring, cutting and drilling operations.",
      alt: "A 3d model",
      image: getImage(data.detail_1)
    },
    {
      title: "Fabrication",
      content: "Our facility is CWB certified to W47.1 Division 1, with work performed by certified Journeyman Welders. Our shop features multiple state of the art, fully automated beam lines that incorporate high speed carbide drilling, large format band sawing and powerful plasma coping for accuracy to one tenth of a millimeter. ",
      alt: "A welder working on a steel beam",
      image:  getImage(data.detail_2)
    },
    {
      title: "Installation",
      content: "Our highly skilled, CWB certified Journeymen Field crew has successfully erected a wide array of structural projects in Calgary and surrounding area, Western Canada and beyond. The accuracy of the manufactured products from our Shop allows our crew the capability to efficiently tackle any size project.",
      alt: "A welder working",
      image:  getImage(data.detail_3)
    },
    {
      title: "Miscellaneous Steel",
      content: "At Moli Industries we can accommodate and produce a wide selection of miscellaneous steel requests including modifications and upgrades to serve our clients. Common services include ladders, handrails, stairs and many other mild steel products.",
      alt: "A steel staircase",
      image:  getImage(data.detail_4)
    }
  ];

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? "active" : "";

    return (
      <>
      <details>
        <summary onClick={() => onTitleClick(index)}>{item.title}</summary>
        {item.content}
      </details>
      </>
      // <div key={item.title}>
      //   <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
      //     <i className="dropdown icon"></i>
      //     {item.title}
      //   </div>
      //   <div className={`content ${active}`}>
      //     <p>{item.content}</p>
      //   </div>
      // </div>
    );
  });

  return (
    <section>
      <div className="Container">
        <h2>Our Services</h2>
        <div className={sty.Accordion}>
          <div className={sty.AccordionImage}>
            <GatsbyImage image={items[activeIndex].image} alt={items[activeIndex].alt}/>
          </div>
          <div className={sty.AccordionInfo}>
            {renderedItems}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccordionSection;