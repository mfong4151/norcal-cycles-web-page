import React from 'react'
import './bikes.css'

const BikeGridItem = ({bike}) => {
  return (
    <div className='bike udc cursor-events'>
        <img src="" alt="" />
        <div>
            <h4 className="name"></h4>
            <ul>
                <li className="make"></li>
                <li className="model"></li>
                <li className="milelage"></li>
            </ul>
            <p className="price"></p>
        </div>
        {bike}
    </div>
  )
}

export default BikeGridItem
