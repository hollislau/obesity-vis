import React from 'react';
import * as d3 from 'd3';
import DataBars from '../DataBars';

const yMax = data => d3.max(data, d => d.mean);

const xScale = props => {
  const { chartData, width, padding } = props;

  return d3.scaleBand()
    .domain(chartData.map(d => d.age_start))
    .rangeRound([padding, width - padding * 2])
    .padding(0.01);
};

const yScale = props => {
  const { chartData, height, padding } = props;

  return d3.scaleLinear()
    .domain([0, yMax(chartData)])
    .range([height - padding * 2, padding]);
};

const Histogram = props => {
  const { width, height } = props;
  const scales = {
    xScale: xScale(props),
    yScale: yScale(props),
  };

  return (
    <svg
      width={ width }
      height={ height }
    >
      <DataBars
        { ...props }
        { ...scales }
      />
    </svg>
  );
};

export default Histogram;
