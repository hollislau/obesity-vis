import React from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';
import DataBar from '../DataBar';
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
  const { chartData, xProp, chartWidth, chartHeight } = props;
  const scales = {
    xScale: xScale(props),
    yScale: yScale(props)
  };

  return (
    <svg
      className="bar-chart"
      width={ chartWidth }
      height={ chartHeight }
    >
      { chartData.map(d =>
        <DataBar
          key={ d[xProp] }
          d={ d }
          { ...props }
          { ...scales }
        />
      )}
      <XYAxis
        { ...props }
        { ...scales }
      />
    </svg>
  );
};

BarChart.propTypes = {
  chartData: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.string.isRequired
    ).isRequired
  ).isRequired,
  xProp: PropTypes.string.isRequired,
  yProp: PropTypes.string.isRequired,
  chartWidth: PropTypes.number.isRequired,
  chartHeight: PropTypes.number.isRequired,
  chartPadding: PropTypes.number.isRequired,
  barPadding: PropTypes.number.isRequired
};

export default BarChart;
