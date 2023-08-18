import React, {useState} from 'react';
import './search.css';

const SearchForm = () => {

   

    const handleOnSubmit = () => {
    
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <label htmlFor=""></label>
            <input type="text" />

            <label></label>
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            

            <button>
                Search
            </button>
        </form>
    );
};

export default SearchForm;