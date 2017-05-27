import React from 'react';

const Checkbox = ({ name, checked, onChange, children }) =>
  <form>
    <label>
      { children }
      <input
        name={ name }
        type='checkbox'
        checked={ checked }
        onChange={ onChange }
      />
    </label>
  </form>;

export default Checkbox;
