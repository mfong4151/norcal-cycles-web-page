import React from 'react';
import './search.css';
import '../SearchBar'
import { createTrieWords } from './utils/trieWords';
import AdvancedSearch from './AdvancedSearch';

const Search = () => {

  return (
    <div id='' className=''>
        <SearchBar trie={createTrieWords() }/>
        <AdvancedSearch/>
    </div>
  );
};

export default Search;