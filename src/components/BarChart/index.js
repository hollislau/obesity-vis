import React from 'react';
import * as d3 from 'd3';
import DataBars from '../DataBars';
import XYAxis from '../XYAxis';
import './index.css';

const yMax = (data, dataProp) => d3.max(data, d => d[dataProp]);

const xScale = ({ chartData, xProp, width, padding }) =>
  d3.scaleBand()
    .domain(chartData.map(d => d[xProp]))
    .rangeRound([padding, width - padding])
    .padding(0.1);

const yScale = ({ chartData, yProp, height, padding }) =>
  d3.scaleLinear()
    .domain([0, yMax(chartData, yProp)])
    .range([height - padding, padding]);

const BarChart = props => {
  const { width, height } = props;
  const scales = {
    xScale: xScale(props),
    yScale: yScale(props)
  };

  return (
    <svg
      className='bar-chart'
      width={ width }
      height={ height }
    >
      <DataBars
        { ...props }
        { ...scales }
      />
      <XYAxis
        { ...props }
        { ...scales }
      />
    </svg>
  );
};

export default BarChart;
