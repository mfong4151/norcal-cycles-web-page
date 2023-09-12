import React, {useState, useRef} from 'react'
import BikeGridItem from './BikeGridItem'
import './bikes.css'

const BikeGrid = ({bikes, bikeGridRef}) => {
    const [currPage, setCurrPage] = useState(0)
    const WINDOW_NUM = 6;
    const displayedBikes = bikes.slice(currPage * WINDOW_NUM, currPage * WINDOW_NUM + WINDOW_NUM)
    const numPages = Math.ceil(bikes.length/WINDOW_NUM);
    const slidingWindow = useRef([0, 10])
    const GAP_SIZE = 10;
    let [l, r] = slidingWindow.current
    const changeWindowBtns = createChangeBtns(numPages)

    const setSlidngWindow = (i) =>{
        const windowGap = slidingWindow.current;
        windowGap[0] = Math.min(numPages - GAP_SIZE, Math.max(i-2, 0));
        windowGap[1] = windowGap[0] + GAP_SIZE;
        setCurrPage(i)
        bikeGridRef.current.scrollIntoView({behavior:'smooth'})

    }
    

    const handleOnClick = (e, i) =>{
        e.preventDefault()
        e.stopPropagation()
        setSlidngWindow(i)
        
    }


    const handleLRClick = (e) =>{
        const id = e.target.id;
        e.preventDefault()
        e.stopPropagation()
        
        switch(id){
            case 'l-btn':
                setSlidngWindow(0)
                break
            case 'r-btn':
                setSlidngWindow(numPages -1)
                break
            default:
                break
        }
    }
   
        
    return (
        <div id='bike-page-main' className='udc fdc'>
            <div id='bikes-grid'>
                {displayedBikes.map((bike, idx) => <BikeGridItem key={idx} bike={bike}/>)}
            </div>

            <div id='page-changer' className='udc'>
                <button
                    id='l-btn'
                    className={`lr-button btn-defaults cursor-events ${!currPage && 'disabled'}`}
                    onClick={handleLRClick}
                >
                    Left
                </button>
                {changeWindowBtns.map((i, idx) => 
                    <button 
                        className={`cursor-events btn-defaults ${currPage === i && 'disabled'}`} 
                        key={idx} 
                        onClick={e => handleOnClick(e, i)}>
                        {i + 1}
                    </button>
                ).slice(l, r)} 
                <button
                    id='r-btn'
                    className={`lr-button btn-defaults cursor-events ${currPage === numPages -1 && 'disabled'}`}
                    onClick={handleLRClick}
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