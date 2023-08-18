import React, {useState} from 'react'
import BikeGridItem from './BikeGridItem'

const BikeGrid = ({bikes, bikeStates}) => {
    const [currPage, setCurrPage] = useState(0)
    const WINDOW_NUM = 9;
    const displayedBikes = bikes.slice(currPage * WINDOW_NUM, currPage * WINDOW_NUM + WINDOW_NUM)
    const numWindows = Math.ceil(bikes.length/WINDOW_NUM);
    const changeWindowBtns = createChangeBtns(numWindows, setCurrPage)
    const {
        make, setMake,
        model, setModel,
        useTrans, setTrans,
        yearStart, setYearStart,
        yearEnd, setYearEnd,
        priceStart, setPriceStart,
        priceEnd, setPriceEnd
    } = bikeStates;
    
    return (
        
        <div>
            <div id='bikes-grid'>
                {displayedBikes.map((bike, idx) => <BikeGridItem key={idx} bike={bike}/>)}
            </div>

            <div className='udc'>
                <div id='bike-pages se'>
                    {changeWindowBtns.map((i, idx) => <button key={idx} onClick={()=> setCurrPage(i)}>{i + 1}</button>)}
                </div>
            </div>
            
        </div>
    )
}

export default BikeGrid;

const createChangeBtns = (numWindows) =>{
    const changeWindowBtns = [];
    for(let i=0; i < numWindows; i ++) changeWindowBtns.push(i) 
    return changeWindowBtns;
}