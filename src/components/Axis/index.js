import React, { Component } from 'react';
import * as d3 from 'd3';

class Axis extends Component {
  renderAxis = () => {
    const node = this.refs.axis;

    d3.select(node).call(this.props.axis);
  }

  componentDidMount() {
    this.renderAxis();
  }

  componentDidUpdate() {
    this.renderAxis();
  }

  render() {
    return (
      <g
        ref='axis'
        transform={ this.props.translate }
      >
      </g>
    );
  }
}

export default Axis;
