import React, { useState } from 'react';

import api from '../services/api'

import { IoIosArrowDown } from 'react-icons/io'

import '../styles/SelectButton.css'

//Fazer um select dinamico (Trocando as options e o que está escrito na primeira opition)

const SelectButton = ({ name, options }) => {
  const [selected, setSelected] = useState(false);

  return (
    <div className="select-box">
      <div className="selected">
        <p>Filtrar por</p>
        <IoIosArrowDown size={20} color="rgba(202, 18, 64, 0.8)" id="arrow" />
      </div>
      
      <div className="optionss-container">
        <div className="option">
          <input type="radio" className="radio" id="image" value="image" name="filter" />
          <label htmlFor="image">Imagem</label>
        </div>

        <div className="option">
          <input type="radio" className="radio" id="video" value="video" name="filter" />
          <label htmlFor="video">Video</label>
        </div>

        <div className="option">
          <input type="radio" className="radio" id="audio" value="audio" name="filter" />
          <label htmlFor="audio">Audio</label>
        </div>
      </div>

    </div>
    // <div className="select-container">
    //   <select onChange={filter()}>
    //     <option value="image" >Imagem</option>
    //     <option value="video" >Video</option>
    //     <option value="audio" >Audio</option>
    //   </select>

    //   <select onChange={sortBy()} >
    //     <option value="new" >Mais Recentes</option>
    //     <option value="old" >Mais Antigos</option>
    //     <option value="expensive" >Mais Caros</option>
    //     <option value="chip" >Mais Baratos</option>
    //     <option value="rating" >Melhor Avaliação</option>
    //   </select>

    // </div>
  )
}

export default SelectButton;