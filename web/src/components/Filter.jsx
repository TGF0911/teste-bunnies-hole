import React, { useState } from 'react';

import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

import '../styles/Filter.css'

//Falta terminar estilização e mandar informações para as functions filterBy e sortBy no App.jsx 

const Filter = (props) => {
  const [active, setActive] = useState(false);

  function showOptions() {
    setActive(true);
  }
  function closeOptions() {
    setActive(false);
  }

  return (
    <div className="select-box">
      <div className="selected" onClick={!active ? showOptions : closeOptions} >
        <p>{props.label}</p>
        {
          active ? (<IoIosArrowUp size={20} color="rgba(202, 18, 64, 0.8)" />) : (
            <IoIosArrowDown size={20} color="rgba(202, 18, 64, 0.8)" />
          )
        }
      </div>
      {
        active && (
          <div className="option-container"  >
            {
              props.options.map((option) => {
                return (
                  <div className="option" >
                    <input
                      key={props.options.id}
                      type={props.type}
                      id={option.value}
                      value={option.value}
                      name={props.name}
                    />
                    <label htmlFor={option.value}>{option.label}</label>
                  </div>
                )
              })
            }
          </div>
        )
      }
    </div>

 
  )
}

export default Filter;