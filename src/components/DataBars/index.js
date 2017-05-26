import React from 'react';
import './index.css';

const renderBars = ({ height, padding, xScale, yScale }) =>
  (d, i) => {
    const barProps = {
      className: 'bar',
      x: xScale(d.age_start),
      y: yScale(d.mean),
      width: xScale.bandwidth(),
      height: height - padding - yScale(d.mean),
      key: i
    };

    return <rect { ...barProps } />;
  };

const DataBars = props =>
  <g>{ props.chartData.map(renderBars(props)) }</g>;

export default DataBars;
