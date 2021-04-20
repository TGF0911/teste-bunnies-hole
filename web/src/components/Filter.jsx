import React, { useState } from 'react';

import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

import '../styles/Filter.css';

//Falta mandar informações para as functions filterBy e sortBy no App.jsx

const Filter = (props) => {
  const [active, setActive] = useState(false);
  const [activeChecks, setActiveChecks] = useState([]);

  function showOptions() {
    setActive(true);
  }
  function closeOptions() {
    setActive(false);
  }

  function handleCheck(index) {
    activeChecks[index] = !activeChecks[index];
    setActiveChecks([...activeChecks]);
  }

  return (
    <div className='select-box'>
      <div className='selected' onClick={!active ? showOptions : closeOptions}>
        <p>{props.label}</p>
        {active ? (
          <IoIosArrowUp size={20} color='rgba(202, 18, 64, 0.8)' />
        ) : (
          <IoIosArrowDown size={20} color='rgba(202, 18, 64, 0.8)' />
        )}
      </div>
      {active && (
        <div className='option-container'>
          {props.options.map((option, index) => {
            return (
              <div
                className={`option ${activeChecks[index] && 'active-option'}`}
                onChange={(event) => handleCheck(index)}
                >
                <input
                  key={props.options.id}
                  id={option.value}
                  type='checkbox'
                  onClick={!activeChecks[index] ? props.onClick : props.find}
                  value={option.value}
                  name={props.name}
                  checked={activeChecks[index]}
                />
                <label htmlFor={option.value}>{option.label}</label>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Filter;