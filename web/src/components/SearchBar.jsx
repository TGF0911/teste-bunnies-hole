import React from 'react';
import { FaSearch } from 'react-icons/fa';

import '../styles/SearchBar.css'

//Fazer o metodo dde busca no input

const SearchBar = ({value, onChange, onClick}) => {

  return (
    <div className="search-container">
    <div className="searchBar">
      <input
        type="text"
        placeholder="Procure seu produto"
        value = {value}
        onChange= {onChange}
      />
      <button onClick={onClick}>
        <FaSearch size={24} color="rgba(202, 18, 64, 0.8)" />
      </button>
    </div>
  </div>
  )
}

export default SearchBar;