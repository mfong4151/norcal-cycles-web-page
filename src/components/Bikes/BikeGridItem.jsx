import React from 'react'
import './bikes.css'
import { useNavigate } from 'react-router-dom'
import makeBikeName from '../../utils/makeBikeName';
import { RightArrow } from '../svg/RightArrow';


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
        <img src={bike.image[0]} alt=""/>
        <div className='name-holder udc'>
          <h4 className="bike-name">{bikeName}</h4>

        </div>
        <ul className='fdc'>
         <li ><span className='price'>{`$${bike.price}`}</span><span>00</span></li>
          <li><span className='bike-attr'>Transmission: </span> {bike.transmission}</li>
          <li><span className='bike-attr'>Engine: </span>{bike.engine}</li>
          <li><span className='bike-attr'>Stock No: </span>{bike.stocknumber}</li>
          <li><span className='bike-attr'>Miles: </span>{bike.mileage}</li>
        </ul>
        <div className='bike-btn-holder udc-left'>
          <button className='btn-defaults cursor-events se'>
            Check it out
            <RightArrow/>
          </button>
        </div>
    </div>
  )
}

export default BikeGridItem
