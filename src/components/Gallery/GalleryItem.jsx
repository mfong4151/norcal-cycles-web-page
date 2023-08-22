import React, { useEffect, useRef} from 'react';
import './gallery.css';

const GalleryItem = ({id, image}) => {
    const itemRef = useRef(null)

    useEffect(()=>{
        const timeout = setTimeout(() => {
            itemRef.current.classList.add('visible');
          }, 1000);

        return () => {
            clearTimeout(timeout);
        };
          
    }, [])
            
    return (
     
        <img
            id={`gallery-itm-${id}`} 
            className='gallery-img' 
            ref={itemRef}
            src={image} alt=''
        />
    );
};

export default GalleryItem;