import React from 'react';
import * as d3 from 'd3';
import DataBars from '../DataBars';
import XYAxis from '../XYAxis';
import './index.css';

const yMax = (data, dataProp) => d3.max(data, d => d[dataProp]);

const xScale = ({ chartData, xProp, chartWidth, chartPadding, barPadding }) =>
  d3.scaleBand()
    .domain(chartData.map(d => d[xProp]))
    .rangeRound([chartPadding, chartWidth - chartPadding])
    .padding(barPadding);

const yScale = ({ chartData, yProp, chartHeight, chartPadding }) =>
  d3.scaleLinear()
    .domain([0, yMax(chartData, yProp)])
    .range([chartHeight - chartPadding, chartPadding]);

const BarChart = props => {
  const { chartWidth, chartHeight } = props;
  const scales = {
    xScale: xScale(props),
    yScale: yScale(props)
  };

  return (
    <svg
      className='bar-chart'
      width={ chartWidth }
      height={ chartHeight }
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
