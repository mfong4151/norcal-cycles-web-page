import React, { useState, useEffect, useMemo } from 'react';
import './gallery.css';
import GalleryItem from './GalleryItem';

const Gallery = ({imageObjs, transitionTime}) => {
  const [curr, setCurr] = useState(0);
  
  const galleryItems = useMemo(
    ()=> 
      imageObjs.map((imageObj, idx) => 
      <GalleryItem id={idx} imageObj={imageObj} key={idx}/>
    ),
    [imageObjs]
  );

  const handleOnClick = (e) => {
      e.preventDefault()
      e.stopPropagation()
      setCurr(parseInt(e.target.value))
    }

  useEffect(() => {
      const interval = setInterval(() => {
        setCurr((prev) => (prev + 1) % imageObjs.length);
      }, transitionTime);

      return () => {
        clearInterval(interval);
      };
  }, []);

  return (
    <div id='gallery-cont' className='fdc'>
      {galleryItems[curr]}
      <aside id='gallery-info' className='udc fdc'>
        <h2 className='gallery-item-name'>{imageObjs[curr].desc}</h2>
          <div id='gallery-slider'>
            {imageObjs.map((_ , idx) => 
              <button 
                value={idx} 
                onClick={handleOnClick}
                className={`gallery-slider-btn ${curr === idx ? 'active-slider-btn': ''}`}  
                />
              )}
          </div>
      </aside>
    </div>
  );
};

export default Gallery;
