import React, { useState } from 'react';
import './search.css'; 
import SearchForm from './SearchForm';

const AdvancedSearch = () => {
    const [adSearchOn, setAdSearchOn] = useState(false);

    const handleOnClick = () => {
        setAdSearchOn(!adSearchOn);
    };

    return (
        <div className='search-container'>
            <p className='cursor-events' onClick={handleOnClick}>
                {adSearchOn ? 'Hide Search Options' : 'Advanced Search'}
            </p>
            {adSearchOn && <SearchForm />}
        </div>
    );
};

export default AdvancedSearch;
