import React, {useContext} from 'react';
import './search.css';
import { BikeContext } from '../Bikes';

const SearchForm = () => {
    
    const { make, setMake,
        model, setModel,
        useTrans, setTrans,
        yearStart, setYearStart,
        yearEnd, setYearEnd,
        priceStart, setPriceStart,
        priceEnd, setPriceEnd,} = useContext(BikeContext)

    const handleOnSubmit = () => {
    
    }

    return (
        <form onSubmit={handleOnSubmit}>
                <div>
                    <label htmlFor="make">
                        Make
                    </label>
                    <input
                        type="text"
                        id="make"
                        value={make}
                        onChange={e => setMake(e.target.value)}
                    />
                </div>
                
                <div>
                    <label htmlFor="yearStart">
                        Year Range
                    </label>
                    <input
                        type="text"
                        id="yearStart"
                        value={yearStart}
                        onChange={e => setYearStart(e.target.value)}
                    />
                    <input
                        type="text"
                        id="yearEnd"
                        value={yearEnd}
                        onChange={e => setYearEnd(e.target.value)}
                    />
                </div>
                
                <div>
                    <label htmlFor="model">
                        Model
                    </label>
                    <input
                        type="text"
                        id="model"
                        value={model}
                        onChange={e => setModel(e.target.value)}
                    />
                </div>
                
                <div>
                    <label htmlFor="transmission">
                        Transmission
                    </label>
                    <input
                        type="text"
                        id="transmission"
                        value={useTrans}
                        onChange={e => setTrans(e.target.value)}
                    />
                </div>
                
                <div>
                    <label htmlFor="priceStart">
                        Price Range
                    </label>
                    <input
                        type="text"
                        id="priceStart"
                        value={priceStart}
                        onChange={e => setPriceStart(e.target.value)}
                    />
                    <input
                        type="text"
                        id="priceEnd"
                        value={priceEnd}
                        onChange={e => setPriceEnd(e.target.value)}
                    />
                </div>
                
                <div>
                    <button type="submit">
                        Search
                    </button>
                </div>
            </form>
    )
};

export default SearchForm;