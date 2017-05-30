import React from 'react';

const Checkbox = ({ name, selected, setting, onChange, children }) =>
  <form>
    <label>
      { children }
      <input
        name={ name }
        type="checkbox"
        checked={ selected === setting }
        onChange={ onChange }
      />
    </label>
  </form>;

export default Checkbox;
