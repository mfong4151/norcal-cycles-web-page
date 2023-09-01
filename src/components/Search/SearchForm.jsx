import React, {useContext} from 'react';
import './search.css';
import { BikeContext } from '../Bikes';

const SearchForm = ({allBikes, setBikes}) => {
    
    const { make, setMake,
        model, setModel,
        trans, setTrans,
        yearStart, setYearStart,
        yearEnd, setYearEnd,
        priceStart, setPriceStart,
        priceEnd, setPriceEnd,} = useContext(BikeContext)

    
    const filterBikes = (bike) =>  (
        (yearStart <= bike.year <= bike.yearEnd || (!yearStart && !yearEnd)) &&
        (priceStart <= bike.price <= bike.priceEnd || (!priceStart && !priceEnd) ) &&
        (bike.make === make.toLowerCase() || (!bike.make) ) &&
        (bike.model === model.toLowerCase() || (!bike.model) ) &&
        (bike.transmission === trans.toLowerCase() || (!bike.transmission))
    )


    const handleOnSubmit = (e) => {
        e.preventDefault()
        e.stopPropagation()
        
        const newBikes = allBikes.filter(filterBikes)
        setBikes(newBikes)

    }

    //Reset
    const handleOnClick = (e) => {
        e.preventDefault()
        e.stopPropagation()
        
        setMake('')
        setModel('')
        setTrans('')
        setYearStart(0)
        setYearEnd(0)
        setPriceStart(0)
        setPriceEnd(0)
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
                            value={yearStart ? yearStart : 'Start'}
                            onChange={e => setYearStart(e.target.value)}
                            placeholder='Start'
                            />
                        <input
                            type="number"
                            id="yearEnd"
                            value={yearEnd ? yearEnd : 'End'}
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
                        value={trans}
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
                            value={ priceStart ? priceStart : "Start"}
                            onChange={e => setPriceStart(e.target.value)}
                            placeholder="Start"
                            />
                        <input
                            type="number"
                            id="priceEnd"
                            value={priceEnd ? priceEnd : "End"}
                            onChange={e => setPriceEnd(e.target.value)}
                            placeholder='End'
                            />
                    </div>
                </div>
                
                <div className='udc-right'>
                    <button type="submit">
                        Search
                    </button>
                    <button onClick={handleOnClick}>
                        Reset
                    </button>
                </div>
        </form>
    )
};

export default SearchForm;