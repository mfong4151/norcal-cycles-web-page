import React from 'react';
import './search.css';
import '../SearchBar'
import { createTrieWords } from './utils/trieWords';

const Search = () => {

  return (
    <div id='' className=''>
        <SearchBar trie={createTrieWords() }/>
    </div>
  );
};

export default Search;