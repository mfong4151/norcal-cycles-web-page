import React from 'react'
import norCalBanner from  '../../assets/norcal_cylces_banner.jpg'
import './header.css'
const Header = ({headerRef}) => {
  return (
    <header className='udc' ref={headerRef}>
        <img src={norCalBanner} alt="" className="banner" />
    </header>
  )
}

export default Header
