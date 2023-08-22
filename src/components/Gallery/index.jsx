import React, { useState, useEffect } from 'react';
import './gallery.css';
import GalleryItem from './GalleryItem';



const Gallery = ({imageObjs, transitionTime}) => {
  const [curr, setCurr] = useState(0);
  
  const galleryItems = imageObjs.map((imageObj, idx) => 
    <GalleryItem id={idx} image={imageObj.img} key={idx}/>
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
    <div className="gallery-cont">
      {galleryItems[curr]}
      <h2 className='gallery-item-name'>{imageObjs[curr].desc}</h2>
      <div className='gallery-slider'>
        {imageObjs.map((_ , idx) => 
          <button 
            value={idx} 
            onClick={handleOnClick}
            className={`gallery-slider-btn ${curr === idx ? 'active-slider-btn': ''}`}  
          />
        )}
      </div>
    </div>
  );
};

export default Gallery;
