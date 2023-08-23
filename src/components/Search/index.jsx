import React, {useLayoutEffect, useRef } from 'react';
import './search.css';
import SearchBar from '../SearchBar';
import { createTrieWords } from './utils/trieWords';
import AdvancedSearch from './AdvancedSearch';
import { Trie } from '../../datastructures/trie';

const Search = () => {
    const trieWords = createTrieWords();
    const defaultTrie = new Trie();
    const trie = useRef(defaultTrie)

    useLayoutEffect(()=>{
        defaultTrie.build(trieWords)
    }, [])

  return (
    <div id='' className=''>
        <SearchBar trie={trie.current}/>
        <AdvancedSearch/>
    </div>
  );
};

export default Search;