import React, { Component } from 'react';
import * as d3 from 'd3';
import './index.css';

class Axis extends Component {
  renderAxis = ease => {
    const { easeType, easeDuration, axis } = this.props
    const node = this.refs.axis;

    if (ease) {
      return d3.select(node)
        .transition()
        .ease(d3[easeType])
        .duration(easeDuration)
        .call(axis);
    }

    d3.select(node).call(axis);
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
        className='axis'
        ref='axis'
        transform={ this.props.translate }
      >
      </g>
    );
  }
}

export default Axis;
