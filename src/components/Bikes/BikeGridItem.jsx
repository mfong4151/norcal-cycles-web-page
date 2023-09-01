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
    <div className='bike se cursor-events' onClick={handleOnClick}>
        <img className='bike-img' src={bike.images[0]} alt="" />
        <div className='info-holder'>
            <h4 className="name">{bikeName}</h4>
            <ul className='fdc'>
                <li className="transmission">{`Transmission: ${bike.transmission}`}</li>
                <li className="engine">{`Engine: ${bike.engine}`}</li>
                <li className="milelage">{`Miles: ${bike.miles}`}</li>
            </ul>
            <p className='bike-id'>{`Stock No: ${bike.id}`}</p>
            <p className="price">{`$${bike.price}`}</p>
        </div>
    </div>
  )
}

export default BikeGridItem
