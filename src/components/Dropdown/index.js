import React from 'react';

const Dropdown = ({ value, onChange }) =>
  <form>
    <select
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
