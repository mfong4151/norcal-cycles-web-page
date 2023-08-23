import React from 'react'
import { useParams } from 'react-router-dom'
import ShowGallery from './ShowGallery'
import { testBikes } from '../../testBikes/testBikes'

const BikeShow = () => {
  const params = useParams()
  const id = params.id
  const bike = testBikes[id];
  
  return (
    <>
      <ShowGallery id={id} imgs={bike.images}/>
      
    </>
  )
}

export default BikeShow
