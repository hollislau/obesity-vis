import React from 'react';

const Radio = ({ list, name, selected, onChange }) =>
  <form>
    { list.map(item =>
      <label key={ item.toLowerCase() }>
        <input
          name={ name }
          type='radio'
          value={ item.toLowerCase() }
          checked={ selected === item.toLowerCase() }
          onChange={ onChange }
        />
        { item }
      </label>
    )}
  </form>;

export default Radio;
