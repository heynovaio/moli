import { useStaticQuery, graphql } from "gatsby"

export const ProjectImages = () => {
  const data = useStaticQuery(graphql`
  query {
    image1_1: file(relativePath: {eq: "projects/project-1-1.JPG"}) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          width: 740
          height: 391
        )
      }
    }
    image1_2: file(relativePath: {eq: "projects/project-1-2.JPG"}) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          width: 740
          height: 391
        )
      }
    }
    image1_3: file(relativePath: {eq: "projects/project-1-3.JPG"}) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          width: 740
          height: 391
        )
      }
    }
    image2_1: file(relativePath: {eq: "projects/project-2-1.JPG"}) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          width: 740
          height: 391
        )
      }
    }
    image2_2: file(relativePath: {eq: "projects/project-2-2.jpg"}) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          width: 740
          height: 391
        )
      }
    }
    image2_3: file(relativePath: {eq: "projects/project-2-3.JPG"}) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          width: 740
          height: 391
        )
      }
    }
    image3_1: file(relativePath: {eq: "projects/project-3-1.JPG"}) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          width: 740
          height: 391
        )
      }
    }
    image3_2: file(relativePath: {eq: "projects/project-3-2.JPG"}) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          width: 740
          height: 391
        )
      }
    }
    image3_3: file(relativePath: {eq: "projects/project-3-3.JPG"}) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          width: 740
          height: 391
        )
      }
    }
    image3_4: file(relativePath: {eq: "projects/project-3-4.JPG"}) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          width: 740
          height: 391
        )
      }
    }
    image4_1: file(relativePath: {eq: "projects/project-4-1.jpg"}) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          width: 740
          height: 391
        )
      }
    }
    image4_2: file(relativePath: {eq: "projects/project-4-2.jpg"}) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          width: 740
          height: 391
        )
      }
    }
    image4_3: file(relativePath: {eq: "projects/project-4-3.jpg"}) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          width: 740
          height: 391
        )
      }
    }
    image5_1: file(relativePath: {eq: "projects/project-5-1.JPG"}) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          width: 740
          height: 391
        )
      }
    }
    image5_2: file(relativePath: {eq: "projects/project-5-2.jpg"}) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          width: 740
          height: 391
        )
      }
    }
    image5_3: file(relativePath: {eq: "projects/project-5-3.jpg"}) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          width: 740
          height: 391
        )
      }
    }
    image5_4: file(relativePath: {eq: "projects/project-5-4.jpg"}) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          width: 740
          height: 391
        )
      }
    }
    image5_5: file(relativePath: {eq: "projects/project-5-5.jpg"}) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          width: 740
          height: 391
        )
      }
    }
    image6_1: file(relativePath: {eq: "projects/project-6-1.JPG"}) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          width: 740
          height: 391
        )
      }
    }
    image6_2: file(relativePath: {eq: "projects/project-6-2.jpg"}) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          width: 740
          height: 391
        )
      }
    }
    image6_3: file(relativePath: {eq: "projects/project-6-3.jpg"}) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          width: 740
          height: 391
        )
      }
    }
    image6_4: file(relativePath: {eq: "projects/project-6-4.jpg"}) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          width: 740
          height: 391
        )
      }
    }
    image7_1: file(relativePath: {eq: "projects/project-7-1.jpg"}) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          width: 740
          height: 391
        )
      }
    }
    image7_2: file(relativePath: {eq: "projects/project-7-2.webp"}) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          width: 740
          height: 391
        )
      }
    }
    image7_3: file(relativePath: {eq: "projects/project-7-3.jpg"}) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          width: 740
          height: 391
        )
      }
    }
    image7_4: file(relativePath: {eq: "projects/project-7-4.JPG"}) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          width: 740
          height: 391
        )
      }
    }
    image7_5: file(relativePath: {eq: "projects/project-7-5.jpg"}) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          width: 740
          height: 391
        )
      }
    }
    image7_6: file(relativePath: {eq: "projects/project-7-6.webp"}) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          width: 740
          height: 391
        )
      }
    }
    image8_1: file(relativePath: {eq: "projects/project-8-1.jpg"}) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          width: 740
          height: 391
        )
      }
    }
    image8_2: file(relativePath: {eq: "projects/project-8-2.jpg"}) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          width: 740
          height: 391
        )
      }
    }
    image8_3: file(relativePath: {eq: "projects/project-8-3.jpg"}) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          width: 740
          height: 391
        )
      }
    }
    image8_4: file(relativePath: {eq: "projects/project-8-4.jpg"}) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          width: 740
          height: 391
        )
      }
    }
    image9_1: file(relativePath: {eq: "projects/project-9-1.jpg"}) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          width: 740
          height: 391
        )
      }
    }
    image9_2: file(relativePath: {eq: "projects/project-9-2.jpg"}) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          width: 740
          height: 391
        )
      }
    }
    image9_3: file(relativePath: {eq: "projects/project-9-3.jpg"}) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          width: 740
          height: 391
        )
      }
    }
    image9_4: file(relativePath: {eq: "projects/project-9-4.jpg"}) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          width: 740
          height: 391
        )
      }
    }
    image10_1: file(relativePath: {eq: "projects/project-10-1.jpg"}) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          width: 740
          height: 391
        )
      }
    }
    image10_2: file(relativePath: {eq: "projects/project-10-2.jpg"}) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          width: 740
          height: 391
        )
      }
    }
    image10_3: file(relativePath: {eq: "projects/project-10-3.jpg"}) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          width: 740
          height: 391
        )
      }
    }
    image10_4: file(relativePath: {eq: "projects/project-10-4.jpg"}) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          width: 740
          height: 391
        )
      }
    }
    misc_1: file(relativePath: {eq: "projects/misc_1.jpg"}) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          width: 740
          height: 391
        )
      }
    }
    misc_2: file(relativePath: {eq: "projects/misc_2.jpg"}) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          width: 740
          height: 391
        )
      }
    }
    misc_3: file(relativePath: {eq: "projects/misc_3.jpg"}) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          width: 740
          height: 391
        )
      }
    }
    misc_4: file(relativePath: {eq: "projects/misc_4.jpg"}) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          width: 740
          height: 391
        )
      }
    }
    misc_5: file(relativePath: {eq: "projects/misc_5.jpg"}) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          width: 740
          height: 391
        )
      }
    }
    misc_6: file(relativePath: {eq: "projects/misc_6.jpg"}) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          width: 740
          height: 391
        )
      }
    }
    misc_7: file(relativePath: {eq: "projects/misc_7.jpg"}) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          width: 740
          height: 391
        )
      }
    }
    misc_8: file(relativePath: {eq: "projects/misc_8.jpg"}) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          width: 740
          height: 391
        )
      }
    }
    misc_9: file(relativePath: {eq: "projects/misc_9.jpg"}) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          width: 740
          height: 391
        )
      }
    }
    misc_10: file(relativePath: {eq: "projects/misc_10.webp"}) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          width: 740
          height: 391
        )
      }
    }
    misc_11: file(relativePath: {eq: "projects/misc_11.webp"}) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          width: 740
          height: 391
        )
      }
    }
    misc_12: file(relativePath: {eq: "projects/misc_12.webp"}) {
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
  return data;
}