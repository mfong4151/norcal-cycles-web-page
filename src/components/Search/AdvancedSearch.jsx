import React from 'react';
import './search.css';

const AdvancedSearch = () => {
    const [adSearchOn, setAdSearchOn] = useState(false)
    const handleOnClick = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setAdSearchOn(prev => !prev)
    }

  return (
    <div id='' className=''>
        {!adSearchOn && <p className='cursor-events' onClick={handleOnClick}>Advanced Search</p>}
        {adSearchOn && <p className='cursor-events' onClick={handleOnClick}>Hide Search Options</p>}

    </div>
  );
};

export default AdvancedSearch;