import React from 'react';

const Dropdown = ({ list, name, value, onChange }) =>
  <form>
    <select
      name={ name }
      value={ value }
      onChange={ onChange }
    >
      { list.map(item =>
        <option
          value={ item }
          key={ item }
        >
          { item }
        </option>
      )}
    </select>
  </form>;

export default Dropdown;
