import * as React from "react"
import * as sty from '../styles/layout/header.module.scss'
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => {
  const [open, setOpen] = React.useState(false)

  return (
    <header className={sty.Header}>
      <div style={{padding: '0 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <Link to='/' className={sty.logo}>
          <StaticImage
            src="../images/moli-logo-light@2x.svg"
            width="180"
            alt='Moli Logo'
          />
        </Link>
        <nav className={open ? sty.navOpen : ''}>

          <button className={sty.hamburger} onClick={() => setOpen(!open)} tabIndex={0}>
            <span className={sty.bar}/>
            <span className={sty.bar}/>
          </button>
          <div className={sty.menu}>
            <div className={sty.menuLinks}>
              <Link to="/">
                Home
              </Link>
              <Link to="/projects">
                Projects
              </Link>
              <Link to="/about">
                About
              </Link>
              <Link to="/contact">
                Contact
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header