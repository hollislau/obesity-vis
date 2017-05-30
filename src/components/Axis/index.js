import React, { Component } from 'react';
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

export default Axis;
