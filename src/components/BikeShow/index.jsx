import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import ShowGallery from './ShowGallery'
import { testBikes } from '../../testBikes/testBikes'
import makeBikeName from '../../utils/makeBikeName'

const BikeShow = () => {
  const params = useParams()
  const id = params.id
  const bike = testBikes[id]; //Temporary "Fetch simulation"
  
  return (
    <>
      <NavLink to='/bikes'>Return to search</NavLink>
      <h1>{makeBikeName(bike)}</h1>
      <ShowGallery id={id} imgs={bike.images}/>
      <div id='bike-info' >
        <h3>{`$${bike.price}`}</h3>
        <ul >
          <li>
            <span>Color:</span> <p>{bike.color}</p>
          </li>
          <li>
            <span>Mileage:</span> <p>{bike.miles}</p>
          </li>
          <li>
            <span>Transmission:</span> <p>{bike.transmission}</p>
          </li>
          <li>
            <span>Engine:</span> <p>{bike.engine}</p>
          </li>
          <li>
            <span>Stock No:</span> <p>{bike.id}</p>
          </li>
          <li>
            <span>Vin:</span> <p>{bike.vin}</p>
          </li>
          <li>
            <span>Body Style:</span> <p>{bike.bodyStyle}</p>
          </li>
          <li>
            <span>Comments:</span> <p>{bike.comments}</p>
          </li>
          
        </ul>

      </div>
    </>
  )
}

export default BikeShow
