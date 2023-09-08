import React from 'react'
import './bikes.css'
import { useNavigate } from 'react-router-dom'
import makeBikeName from '../../utils/makeBikeName';


const BikeGridItem = ({bike}) => {
  const navigate = useNavigate();
  const bikeName = makeBikeName(bike)
  const handleOnClick = (e) => {
      e.preventDefault()
      e.stopPropagation()
      navigate(`/bike/${bike.id}`)
  }
  
  return (
    <div className='bike cursor-events fdc udc' onClick={handleOnClick}>
        <h4 className="name">{bikeName}</h4>
        <img src={bike.images[0]} alt=""/>

             
         <p className="price">{`$${bike.price}.00`}</p>

    </div>
  )
}

export default BikeGridItem
