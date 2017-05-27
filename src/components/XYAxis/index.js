import React from 'react';
import * as d3 from 'd3';
import Axis from '../Axis';

const XYAxis = ({ height, padding, xScale, yScale }) => {
  const xSettings = {
    translate: `translate(0, ${ height - padding })`,
    axis: d3.axisBottom(xScale)
  };
  const ySettings = {
    translate: `translate(${ padding }, 0)`,
    axis: d3.axisLeft(yScale)
  };

  return (
    <g>
      <Axis { ...xSettings }/>
      <Axis { ...ySettings }/>
    </g>
  );
};

export default XYAxis;
