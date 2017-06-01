import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
      easeDuration,
      easeType,
      enableInputs
    } = nextProps;
    const y = yScale(d[yProp]);
    const height = chartHeight - chartPadding - y;

    if (this.state.height !== height) {
      let node = d3.select(this.bar);

      node.transition()
        .duration(easeDuration)
        .ease(d3[easeType])
        .attr('y', y)
        .attr('height', height)
        .on('end', () => {
          this.setState({
            y: y,
            height: height
          });
          enableInputs();
        });
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

DataBar.propTypes = {
  d: PropTypes.objectOf(
    PropTypes.string.isRequired
  ).isRequired,
  xProp: PropTypes.string.isRequired,
  yProp: PropTypes.string.isRequired,
  chartHeight: PropTypes.number.isRequired,
  chartPadding: PropTypes.number.isRequired,
  xScale: PropTypes.func.isRequired,
  yScale: PropTypes.func.isRequired,
  easeDuration: PropTypes.number.isRequired,
  easeType: PropTypes.string.isRequired
};

export default DataBar;
