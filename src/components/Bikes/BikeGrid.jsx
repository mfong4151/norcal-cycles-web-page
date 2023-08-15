import React from 'react'
import BikeGridItem from './BikeGridItem'

const BikeGrid = () => {
    //do a fetch for bikes here

    const bikeOptions =  [{
            picture: 'picture',
            make: 'make 1',
            model: 'model 1',
            year: 'year',
        }, 
    ]
    const bikes = [1, 2, 3, 4, 5, 6,7, 8, 9] //temporary bikes simulation

    return (
        <div id='bikes-grid'>
            {bikes.map((bike, idx) => <BikeGridItem key={idx} bike={bike}/>)}
        </div>
    )
}

export default BikeGrid
