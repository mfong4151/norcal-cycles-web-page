import React, { useLayoutEffect, useRef } from 'react';
import './search.css';
import SearchBar from '../SearchBar';
import AdvancedSearch from './AdvancedSearch';
import { Trie } from '../../datastructures/trie';

const Search = ({bikes, setBikes}) => {

    const defaultTrie = new Trie();
    const trie = useRef(defaultTrie)
    
    useLayoutEffect(()=>{
        const bikeNames = [];  
        for(const bike of bikes){
          bikeNames.push(bike.name)
        }
        defaultTrie.build(bikeNames)

    }, [])

  

  return (
    <div id='' className=''>
        <SearchBar trie={trie.current} setBikes={setBikes}/>
        <AdvancedSearch/>
    </div>
  );
};

export default Search;