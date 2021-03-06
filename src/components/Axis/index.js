import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';
import './index.css';

class Axis extends Component {
  renderAxis = ease => {
    const { easeDuration, easeType, axis } = this.props
    const node = d3.select(this.axis);

    if (ease) {
      node.transition()
        .duration(easeDuration)
        .ease(d3[easeType])
        .call(axis);
    } else {
      node.call(axis);
    }
  }

  componentDidMount() {
    this.renderAxis();
  }

  componentDidUpdate() {
    this.renderAxis('ease');
  }

  render() {
    return (
      <g
        className="axis"
        ref={ axis => this.axis = axis }
        transform={ this.props.translate }
      >
      </g>
    );
  }
}

Axis.propTypes = {
  easeDuration: PropTypes.number.isRequired,
  easeType: PropTypes.string.isRequired,
  axis: PropTypes.func.isRequired,
  translate: PropTypes.string.isRequired
};

export default Axis;
