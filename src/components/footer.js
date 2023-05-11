import * as React from "react"
import * as sty from '../styles/layout/footer.module.scss'
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Footer = () => {
  
  return (
    <footer>
      <div className={sty.menuLinks}>
        <Link to="/">
          Home
        </Link>
        <Link to="/projects">
          Projects
        </Link>
        <Link to='/'>
          <StaticImage
            src="../images/logo.png"
            alt='Moli Logo'
          />
        </Link>
        <Link to="/about">
          About
        </Link>
        <Link to="/contact">
          Contact
        </Link>
      </div>
      <div className={sty.copyright}>
        © {new Date().getFullYear()} copyright
      </div>
    </footer>
  )
}

export default Footer
