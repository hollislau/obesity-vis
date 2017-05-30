import React, { Component } from 'react';
import * as d3 from 'd3';
import './index.css';

class DataBar extends Component {
  constructor(props) {
    const { d, yProp, chartHeight, chartPadding, yScale } = props;

    super(props);

    this.state = {
      y: yScale(d[yProp]),
      height: chartHeight - chartPadding - yScale(d[yProp])
    };
  }

  componentWillReceiveProps(nextProps) {
    const {
      d,
      yProp,
      chartHeight,
      chartPadding,
      yScale,
      easeType,
      easeDuration
    } = nextProps;
    const y = yScale(d[yProp]);
    const height = chartHeight - chartPadding - y;

    if (this.state.height !== height) {
      let node = d3.select(this.bar);

      node.transition()
        .ease(d3[easeType])
        .duration(easeDuration)
        .attr('y', y)
        .attr('height', height)
        .on('end', () =>
          this.setState({
            y: y,
            height: height
          }));
    }
  }

  render() {
    const { d, xProp, xScale } = this.props;
    const { y, height } = this.state;
    const barProps = {
      className: 'bar',
      x: xScale(d[xProp]),
      y: y,
      width: xScale.bandwidth(),
      height: height
    };

    return (
      <rect
        ref={ bar => this.bar = bar }
        { ...barProps }
      />
    );
  }
}

export default DataBar;
