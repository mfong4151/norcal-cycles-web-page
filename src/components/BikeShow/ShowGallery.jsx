import React, { useEffect, useState } from 'react';
import { Pause } from '../svg/Pause';
import { Play } from '../svg/Play';
import './bikeshow.css';

//Top level component for show page
const ShowGallery = ({imgs}) => {


    const transitionTime = 4000;
    const [curr, setCurr] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true)
    const handleOnClick = (e, idx) => {
        e.preventDefault()
        e.stopPropagation()
        setCurr(parseInt(idx))
      }
    const handleMainClick = (e, imgURL) => {
        e.preventDefault();
        e.stopPropagation();
        window.open(imgURL, '_blank'); // Open the image in a new tab
      };
      
    const imgEls = imgs.map((img, idx) => <img key={idx} className='cursor-events' src={img} onClick={(e)=> handleMainClick(e, img)}/>)

    useEffect(() => {
        const interval = setInterval(() => {
          if (isPlaying) setCurr((prev) => (prev + 1) % imgs.length);
        }, transitionTime);
  
        return () => {
          clearInterval(interval);
        };
    }, [isPlaying]);
  

  return (
    <div id='show-gallery'>

        {imgEls[curr]}
        <div className='show-gallery-grid'>
            {imgs.map((img, idx) => 
            <img
                onClick={(e)=> handleOnClick(e, idx)}
                className='cursor-events'
                key={idx} 
                src={img} 
                alt=''
            /> 
        )}
        </div>
        <button id='pause-play' 
          className='btn-defaults udc'
          onClick={() => setIsPlaying(prev => !prev)}
          >
            {isPlaying ? <Pause/> : <Play/>} 
        </button>
    </div>
  );
};

export default ShowGallery;