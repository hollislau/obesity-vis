import React from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({ list, name, value, disabled, onChange }) =>
  <form>
    <select
      name={ name }
      value={ value }
      disabled={ disabled }
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

Dropdown.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Dropdown;
