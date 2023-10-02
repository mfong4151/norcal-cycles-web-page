import React from 'react'
import Gallery from '../Gallery';
import galleryObjs from './galleryObjs';
import './splash.css'


const Splash = () => {

  return (
      <Gallery imageObjs={galleryObjs} transitionTime={7000}/>
  )
}

export default Splash;