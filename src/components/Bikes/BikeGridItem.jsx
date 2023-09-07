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
    <div className='bike cursor-events' onClick={handleOnClick}>
        <h4 className="name udc">{bikeName}</h4>
        <div className='bike-itm-body'>
          <img src={bike.images[0]} alt=""/>

          <div className='info-holder'>
              <ul className='fdc'>
                  <li className="transmission">{`Transmission: ${bike.transmission}`}</li>
                  <li className="engine">{`Engine: ${bike.engine}`}</li>
                  <li className="milelage">{`Miles: ${bike.miles}`}</li>
              </ul>
              <p className='bike-id'>{`Stock No: ${bike.id}`}</p>
              <p className="price">{`$${bike.price}`}</p>
          </div>

        </div>
    </div>
  )
}

export default BikeGridItem
