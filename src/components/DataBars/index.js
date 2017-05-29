import React from 'react';
import './index.css';

const renderBars = ({ xProp, yProp, height, padding, xScale, yScale }) =>
  d => {
    const barProps = {
      className: 'bar',
      x: xScale(d[xProp]),
      y: yScale(d[yProp]),
      width: xScale.bandwidth(),
      height: height - padding - yScale(d[yProp]),
      key: d[xProp]
    };

    return <rect { ...barProps } />;
  };

const DataBars = props =>
  <g>{ props.chartData.map(renderBars(props)) }</g>;

export default DataBars;
