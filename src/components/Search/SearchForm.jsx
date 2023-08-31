import React, {useContext} from 'react';
import './search.css';
import { BikeContext } from '../Bikes';

const SearchForm = ({allBikes, setBikes}) => {
    
    const { make, setMake,
        model, setModel,
        useTrans, setTrans,
        yearStart, setYearStart,
        yearEnd, setYearEnd,
        priceStart, setPriceStart,
        priceEnd, setPriceEnd,} = useContext(BikeContext)

    const filterStates = {make, model, yearStart, yearEnd, priceStart, priceEnd}

    const handleOnSubmit = (e) => {
        e.preventDefault()
        e.stopPropagation()
        
        //1. error handling
        //2.
    }

    return (
        <form id='adv-search-form' className='fdc' onSubmit={handleOnSubmit}>
                <div className='sb'>
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
                
                <div className='sb'>
                    <label htmlFor="yearStart">
                        Year Range
                    </label>
                    <div className='range-hldr'>

                        <input
                            type="number"
                            id="yearStart"
                            value={yearStart}
                            onChange={e => setYearStart(e.target.value)}
                            placeholder='Start'
                            />
                        <input
                            type="number"
                            id="yearEnd"
                            value={yearEnd}
                            onChange={e => setYearEnd(e.target.value)}
                            placeholder='End'
                            />
                    </div>
                </div>
                
                <div className='sb'>
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
                
                <div className='sb'>
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
                
                <div className='sb'>
                    <label htmlFor="priceStart">
                        Price Range
                    </label>

                    <div className='range-hldr'>
                        <input
                            type="number"
                            id="priceStart"
                            value={priceStart}
                            onChange={e => setPriceStart(e.target.value)}
                            placeholder="Start"
                            />
                        <input
                            type="number"
                            id="priceEnd"
                            value={priceEnd}
                            onChange={e => setPriceEnd(e.target.value)}
                            placeholder='End'
                            />
                    </div>
                </div>
                
                <div className='udc-right'>
                    <button type="submit">
                        Search
                    </button>
                </div>
        </form>
    )
};

export default SearchForm;