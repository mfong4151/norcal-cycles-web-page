import React, { useRef, useState } from 'react'
import './searchbar.css'
import DropDownModal from './DropDownModal'


const SearchBar = ({trie, setBikes, allBikes}) => {
  const [searchVal, setSearchVal] = useState('')
  const searchBarRef = useRef(null)
  const searchFormRef = useRef(null)
  const handleOnClick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      const newBikes = [];
      for(const bike of allBikes){
        const name = `${bike.year} ${bike.make} ${bike.model}`
        const bikeAttrs = [ 
          bike.make,
          bike.model,
          bike.transmission,
          bike.engine,
          name,
        ];
        for(const i of bikeAttrs) if(i.includes(searchVal)){  
          newBikes.push(bike);
          break;
        }
      }

      setSearchVal('')
      setBikes(newBikes)
      
  }
  
  const handleReset = (e) => {
      e.preventDefault()
      e.stopPropagation()
      setBikes(allBikes)
  } 

  return (
    <div id='search-comp'>
      <form id='search-form' ref={searchBarRef}>
        <input type="text" ref={searchFormRef} value={searchVal} onChange={e => setSearchVal( e.target.value)}/>
        <button className='btn-defaults cursor-events' onClick={handleOnClick}>Search</button>
        <button className='btn-defaults cursor-events' onClick={handleReset}>Reset</button>
      </form>
      {searchVal && 
        <DropDownModal 
          trie={trie} 
          searchVal={searchVal} 
          setSearchVal={setSearchVal}
          barRef={searchBarRef}  
          searchFormRef={searchFormRef}
        />
      }
  </div>
  )
}

export default SearchBar;
