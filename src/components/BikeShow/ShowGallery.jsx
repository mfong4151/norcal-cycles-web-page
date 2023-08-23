import React, { useEffect, useState } from 'react';
import './bikeshow.css';

//Top level component for show page
const ShowGallery = ({imgs}) => {


    const transitionTime = 4000;
    const [curr, setCurr] = useState(0);
    const imgEls = imgs.map((img, idx) => <img key={idx} src={img} alt=''/>)

    const handleOnClick = (e, idx) => {
        e.preventDefault()
        e.stopPropagation()
        setCurr(parseInt(idx))
      }
  
    useEffect(() => {
        const interval = setInterval(() => {
          setCurr((prev) => (prev + 1) % imgs.length);
        }, transitionTime);
  
        return () => {
          clearInterval(interval);
        };
    }, []);
  

  return (
    <div id='' className='fdr'>
        {imgEls[curr]}
        <div className='show-gallery-grid'>
            {imgs.map((img, idx) => 
            <img
                onClick={(e)=> handleOnClick(e, idx)}
                className=''
                key={idx} 
                src={img} 
                alt=''
            /> 
        )}
        </div>
    </div>
  );
};

export default ShowGallery;