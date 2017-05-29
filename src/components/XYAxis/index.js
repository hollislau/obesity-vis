import React from 'react';
import * as d3 from 'd3';
import Axis from '../Axis';

const XYAxis = props => {
  const {
    chartHeight,
    chartPadding,
    yAxisTicks,
    yAxisFormat,
    xScale,
    yScale
  } = props;
  const xSettings = {
    translate: `translate(0, ${ chartHeight - chartPadding })`,
    axis: d3.axisBottom(xScale)
  };
  const ySettings = {
    translate: `translate(${ chartPadding }, 0)`,
    axis: d3.axisLeft(yScale).ticks(yAxisTicks, yAxisFormat)
  };

  return (
    <g>
      <Axis
        { ...props }
        { ...xSettings }
      />
      <Axis
        { ...props }
        { ...ySettings }
      />
    </g>
  );
};

export default XYAxis;
