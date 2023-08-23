import React, {useState} from 'react'
import BikeGridItem from './BikeGridItem'

const BikeGrid = ({bikes}) => {
    const [currPage, setCurrPage] = useState(0)
    const WINDOW_NUM = 9;
    const displayedBikes = bikes.slice(currPage * WINDOW_NUM, currPage * WINDOW_NUM + WINDOW_NUM)
    const numPages = Math.ceil(bikes.length/WINDOW_NUM);
    const changeWindowBtns = createChangeBtns(numPages, setCurrPage)
    
    return (
        
        <div>
            <div id='bikes-grid'>
                {displayedBikes.map((bike, idx) => <BikeGridItem key={idx} bike={bike}/>)}
            </div>

            <div className='udc'>
                <div id='bike-pages se'>
                    <button
                        className={`lr-button ${!currPage && 'disabled'}`}
                        onClick={()=> setCurrPage(prev => prev -1)}
                    >
                        Left
                    </button>
                    {changeWindowBtns.map((i, idx) => <button key={idx} onClick={()=> setCurrPage(i)}>{i + 1}</button>)} 
                    <button
                        className={`lr-button ${currPage === numPages -1 && 'disabled'}`}
                        onClick={()=> setCurrPage(prev => prev + 1)}
                    >
                        Right
                    </button>
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