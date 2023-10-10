import React, {useState, useEffect, useLayoutEffect} from 'react'
import { NavLink, useParams } from 'react-router-dom'
import ShowGallery from './ShowGallery'
import { testBikes } from '../../testBikes/testBikes'
import makeBikeName from '../../utils/makeBikeName'
import {LeftArrow } from '../svg/LeftArrow'
import { parseTxt } from '../../utils/parseTxt'

const BikeShow = () => {
  const params = useParams()
  const [bikes, setBikes] = useState([])
  const id = parseInt(params.id)
  const bike = bikes[id]


  useEffect(() => {
    async function loadBikes() {
        const bikeData = await parseTxt();
        setBikes(bikeData);
    }

    loadBikes();
}, []);

  if (bikes.length === 0) return (<><p>Loading</p></>)
  else{
    return (
      <>
        <button className='btn-defaults show-btn cursor-events'>
              <NavLink to='/bikes'> Return to search</NavLink>

        </button>
        <h1>{makeBikeName(bike)}</h1>
        <ShowGallery id={id} imgs={bike?.image}/>
        <div id='bike-info' >
          <h3>{`$${bike?.price}`}<span>.00</span></h3>
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
}

export default BikeShow
