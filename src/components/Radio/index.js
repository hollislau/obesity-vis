import React from 'react';
import './index.css';

const Radio = ({ list, capitalize, name, selected, onChange }) =>
  <form className="radio">
    { list.map(item =>
      <label key={ item }>
        <input
          name={ name }
          type="radio"
          value={ item }
          checked={ selected === item }
          onChange={ onChange }
        />
        { capitalize(item) }
      </label>
    )}
  </form>;

export default Radio;
