import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ name, selected, setting, disabled, onChange, children }) =>
  <form>
    <label>
      { children }
      <input
        name={ name }
        type="checkbox"
        checked={ selected === setting }
        disabled={ disabled }
        onChange={ onChange }
      />
    </label>
  </form>;

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  selected: PropTypes.string.isRequired,
  setting: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default Checkbox;
