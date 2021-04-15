import React, { useState } from 'react';

import api from '../services/api'

//Fazer um select dinamico (Trocando as options e o que está escrito na primeira opition)

const SelectButton = ({ name, options }) => {
  const [selected, setSelected] = useState(false);

  function filter() {
    api.get('/products/filter', { params: {} })
  }

  function sortBy() {
    api.get('/products/sortBy', { params: {} })
  }

  return (
    <div className="select-container">
      <select onChange={filter()}>
        <option value="image" >Imagem</option>
        <option value="video" >Video</option>
        <option value="audio" >Audio</option>
      </select>

      <select onChange={sortBy()} >
        <option value="new" >Mais Recentes</option>
        <option value="old" >Mais Antigos</option>
        <option value="expensive" >Mais Caros</option>
        <option value="chip" >Mais Baratos</option>
        <option value="rating" >Melhor Avaliação</option>
      </select>

    </div>
  )
}

export default SelectButton;