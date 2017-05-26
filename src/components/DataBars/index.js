import React from 'react';
import './index.css';

const renderBars = props => (d, i) => {
  const { height, padding, xScale, yScale } = props;
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

const DataBars = props => {
  return (
    <g>{ props.chartData.map(renderBars(props)) }</g>
  );
};

export default DataBars;
