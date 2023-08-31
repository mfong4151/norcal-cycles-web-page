import React, { useRef, useState } from 'react'
import './searchbar.css'
import DropDownModal from './DropDownModal'


const SearchBar = ({trie, setBikes, allBikes}) => {
  const [searchVal, setSearchVal] = useState('')
  const searchBarRef = useRef(null)
  const handleOnClick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      const newBikes = [];
      for(const bike of allBikes){
        if(bike.name.includes(searchVal)) newBikes.push(bike);
      }

      setBikes(newBikes)
      
  }
  
  const handleClear = (e) => {
      e.preventDefault()
      e.stopPropagation()
      setBikes(allBikes)
  } 

  return (
    <div>
      <form id='search-form' ref={searchBarRef}>
        <input type="text" value={searchVal} onChange={e => setSearchVal( e.target.value)}/>
        <button onClick={handleOnClick}>Search</button>
        <button onClick={handleClear}>Reset</button>
      </form>
      {searchVal && 
        <DropDownModal 
          trie={trie} 
          searchVal={searchVal} 
          setSearchVal={setSearchVal}
          barRef={searchBarRef}  
        />
      }
  </div>
  )
}

export default SearchBar;
