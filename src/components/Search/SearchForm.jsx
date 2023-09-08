import React, {useContext, useEffect, useState} from 'react';
import './search.css';
import { BikeContext } from '../Bikes';
import handleErrors from './utils/handleErrors';

const SearchForm = ({allBikes, setBikes}) => {
    const [errors, setErrors] = useState([])
    const { make, setMake,
        model, setModel,
        trans, setTrans,
        yearStart, setYearStart,
        yearEnd, setYearEnd,
        priceStart, setPriceStart,
        priceEnd, setPriceEnd,} = useContext(BikeContext)

    
    const filterBikes = (bike) =>  {

        const isYear = (yearStart <= bike.year && bike.year <= yearEnd) || (!yearStart && !yearEnd)
        const isPrice = (priceStart <= bike.price && bike.price <= priceEnd) || (!priceStart && !priceEnd)
        const isMake = (bike.make.toLowerCase() === make.toLowerCase()) || !make
        const isModel = (bike.model.toLowerCase() === model.toLowerCase()) || !model
        const isTrans =  (bike.transmission === trans.toLowerCase() && !!trans) || !trans 
        return isYear && isPrice && isMake && isModel && isTrans 

    }


    const handleOnSubmit = (e) => {
        e.preventDefault()
        e.stopPropagation()

        const newErrors = handleErrors(yearStart, yearEnd, priceStart, priceEnd)
        if (newErrors.length){
            setErrors(newErrors)
            return
        }

        const newBikes = allBikes.filter(bike => filterBikes(bike))
        setBikes(newBikes)

    }

    useEffect(()=>{
        setErrors([])
    }, [make, model, trans, yearStart, yearEnd, priceStart, priceEnd])

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
        setBikes(allBikes)
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
                            onChange={e => setYearStart(parseInt(e.target.value))}
                            placeholder='Start'
                            />
                        <input
                            type="number"
                            id="yearEnd"
                            value={yearEnd ? yearEnd : 'End'}
                            onChange={e => setYearEnd(parseInt(e.target.value))}
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
                            onChange={e => setPriceStart(parseInt(e.target.value))}
                            placeholder="Start"
                            />
                        <input
                            type="number"
                            id="priceEnd"
                            value={priceEnd ? priceEnd : "End"}
                            onChange={e => setPriceEnd(parseInt(e.target.value))}
                            placeholder='End'
                            />
                    </div>
                </div>
                
                <div className='sb'>
                    <div/>

                    {errors.length > 0 && 
                        <div>
                            {errors.map((error,idx) => <p key={idx}>{error}</p>)}
                        </div>
                    }

                    <div id='adv-search-btn-holder'>
                        <button className='btn-defaults adv-search-btns' type="submit">
                            Search
                        </button>
                        <button className='btn-defaults adv-search-btns' onClick={handleOnClick}>
                            Reset
                        </button>
                    </div>
                </div>
        </form>
    )
};

export default SearchForm;