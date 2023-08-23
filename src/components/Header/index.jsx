import React from 'react'
import norCalBanner from  '../../assets/norcal_cylces_banner.jpg'
import './header.css'
import { useNavigate } from 'react-router-dom' 

const Header = ({headerRef}) => {
  const navigate = useNavigate();

  const handleOnClick = (e) => {
      e.preventDefault()
      e.stopPropagation()
      navigate('/')
  }
  
  return (
    <header className='udc' ref={headerRef}>
        <img 
            onClick={handleOnClick}
            className='cursor-events banner' 
            src={norCalBanner} 
            alt="" />
    </header>
  )
}

export default Header
