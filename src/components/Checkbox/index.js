import React from 'react';
import PropTypes from 'prop-types';

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

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  selected: PropTypes.string.isRequired,
  setting: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default Checkbox;
