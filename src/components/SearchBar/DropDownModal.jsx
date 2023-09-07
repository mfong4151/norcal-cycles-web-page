import React from 'react'
import DropDownItem from './DropDownItem'
import './searchbar.css'


const DropDownModal = ({trie, searchVal, setSearchVal,barRef, searchFormRef}) => {


  const barRefCurr= barRef.current
  const style = {
      top: `${barRefCurr.offsetHeight -20}px`,
  }

  return (
      <div className='modal-overlay'>
        <dialog open
          id='search-res'  
          style={style}
          >
          <ul className='fdc'>
            {trie.complete(searchVal).map((query, idx) => 
              <DropDownItem key={idx} query={query} setSearchVal={setSearchVal}/>
            )}
          </ul>

        </dialog>
      </div>

  )
}

export default DropDownModal

