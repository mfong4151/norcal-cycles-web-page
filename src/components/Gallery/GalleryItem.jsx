import React, { useEffect, useRef} from 'react';
import './gallery.css';
import { Link } from 'react-router-dom';

const GalleryItem = ({id, imageObj}) => {
    const itemRef = useRef(null)

    
    return (
        <>
        {imageObj.aLink 
            ? <a href={`${imageObj.aLink}`} className='udc'>
                <Image id={id} itemRef={itemRef} imageObj={imageObj}/>
              </a> 
            : <Link  className='udc'>
                <Image id={id} itemRef={itemRef} imageObj={imageObj}/>
              </Link> 
            }
        </>
    );
};

export default GalleryItem;


const Image = ({id, itemRef, imageObj}) => {

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
        src={imageObj.img} 
    />
  );
};

