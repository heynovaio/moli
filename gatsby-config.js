/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Moli Industries LTD`,
    description: `Moli offers exceptional structural steel solutions in Calgary and beyond. With over three decades of industry expertise, Moli Industries Ltd. is renowned in Western Canada’s construction landscape. From structural engineering design, manufacturing, and structural steel erection to miscellaneous steel fabrication, our dedicated team of welders and ironworkers excels in delivering outstanding projects that redefine the possibilities of structural steel. With a dynamic and competitive approach, Moli has carved a niche in the steel construction industry, earning a well-deserved reputation for excellence. Whether it’s large-scale projects in Calgary or ventures across Western Canada, we bring unparalleled experience and unwavering commitment to every endeavour. Discover the Moli advantage and unlock the potential of your project. Explore moli.ca today and experience the superior craftsmanship, reliability, and innovation that set us apart.`,
    author: `HeyNova`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Bebas Neue`,
          `Inter\:800`,
          `Poppins\:400,500` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Moli`,
        short_name: `Moli`,
        start_url: `/`,
        background_color: `#262A36`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
