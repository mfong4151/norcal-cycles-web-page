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
    <div className='bike cursor-events fdc' onClick={handleOnClick}>
        <img src={bike.images[0]} alt=""/>
        <h4 className="name">{bikeName}</h4>
        <ul className='fdc'>
         <li className="price">{`$${bike.price}.00`}</li>
          <li><span>Transmission: </span> {bike.transmission}</li>
          <li><span>Engine: </span>{bike.engine}</li>
          <li><span>Stock No: </span>{bike.id}</li>
          <li><span>Miles: </span>{bike.miles}</li>
        </ul>
        <div className='bike-btn-holder udc-left'>
          <button className='btn-defaults cursor-events'>
            Check it out
          </button>
        </div>
    </div>
  )
}

export default BikeGridItem
