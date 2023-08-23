import React from 'react'
import { useParams } from 'react-router-dom'

const BikeShow = () => {
  const params = useParams()

  return (
    <>
      {params.id}
    </>
  )
}

export default BikeShow
