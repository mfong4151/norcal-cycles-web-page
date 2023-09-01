import React, { useLayoutEffect, useRef } from 'react';
import './search.css';
import SearchBar from '../SearchBar';
import AdvancedSearch from './AdvancedSearch';
import { Trie } from '../../datastructures/trie';
import makeBikeName from '../../utils/makeBikeName';

const Search = ({allBikes, setBikes}) => {

    const defaultTrie = new Trie();
    const trie = useRef(defaultTrie)
    
    useLayoutEffect(()=>{
        const bikeNames = [];  
        for(const bike of allBikes){
          bikeNames.push(makeBikeName(bike))
        }
        defaultTrie.build(bikeNames)

    }, [])

  

  return (
    <div id='' className=''>
        <SearchBar trie={trie.current} setBikes={setBikes} allBikes={allBikes}/>
        <AdvancedSearch allBikes={allBikes} setBikes={setBikes}/>
    </div>
  );
};

export default Search;