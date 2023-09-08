import React, {useState} from 'react'
import BikeGridItem from './BikeGridItem'
import './bikes.css'

const BikeGrid = ({bikes}) => {
    const [currPage, setCurrPage] = useState(0)
    const WINDOW_NUM = 6;
    const displayedBikes = bikes.slice(currPage * WINDOW_NUM, currPage * WINDOW_NUM + WINDOW_NUM)
    const numPages = Math.ceil(bikes.length/WINDOW_NUM);
    const changeWindowBtns = createChangeBtns(numPages, setCurrPage)
    
    return (
        
        <div className='udc fdc'>
            <div id='bikes-grid'>
                {displayedBikes.map((bike, idx) => <BikeGridItem key={idx} bike={bike}/>)}
            </div>

            <div id='page-changer' className='udc'>
                <button
                    id='l-btn'
                    className={`lr-button btn-defaults cursor-events ${!currPage && 'disabled'}`}
                    onClick={()=> setCurrPage(prev => prev -1)}
                >
                    Left
                </button>
                {changeWindowBtns.map((i, idx) => 
                    <button className={`cursor-events btn-defaults ${currPage === i && 'disabled'}`} key={idx} onClick={()=> setCurrPage(i)}>{i + 1}</button>
                )} 
                <button
                    id='r-btn'
                    className={`lr-button btn-defaults cursor-events ${currPage === numPages -1 && 'disabled'}`}
                    onClick={()=> setCurrPage(prev => prev + 1)}
                >
                    Right
                </button>
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