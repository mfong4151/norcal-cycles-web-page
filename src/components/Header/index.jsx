import React from 'react'
import norCalBanner from  '../../assets/norcal_cylces_banner.jpg'
import './header.css'
const Header = () => {
  return (
    <header className='udc'>
        <img src={norCalBanner} alt="" className="banner" />
    </header>
  )
}

export default Header
