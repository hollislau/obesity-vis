import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Radio = ({ list, capitalize, name, selected, disabled, onChange }) =>
  <form className="radio">
    { list.map(item =>
      <label key={ item }>
        <input
          name={ name }
          type="radio"
          value={ item }
          checked={ selected === item }
          disabled={ disabled }
          onChange={ onChange }
        />
        { capitalize(item) }
      </label>
    )}
  </form>;

Radio.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
  capitalize: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  selected: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Radio;
