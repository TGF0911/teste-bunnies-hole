import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';

import '../styles/SearchBar.css'

const SearchBar = () => {
  //const [searchParams, setSearchParams] = useState('');

  return (
    <div className="searchBar">
      <input
        type="text"
        placeholder="Procure seu produto"
        //value={searchParams}
        //onChange={(e) => setSearchParams(e.target.value)}
      />

      <button>
        <BsSearch size={24} color="rgba(202, 18, 64, 0.8)" />
      </button>
    </div>
  )
}

export default SearchBar;