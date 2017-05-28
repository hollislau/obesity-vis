import React from 'react';
import './index.css';

const capitalize = str =>
  str[0].toUpperCase() + str.slice(1);

const Radio = ({ list, name, selected, onChange }) =>
  <form className='radio'>
    { list.map(item =>
      <label key={ item }>
        <input
          name={ name }
          type='radio'
          value={ item }
          checked={ selected === item }
          onChange={ onChange }
        />
        { capitalize(item) }
      </label>
    )}
  </form>;

export default Radio;
