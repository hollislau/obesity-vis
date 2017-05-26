import React from 'react';
import Axis from '../Axis';

const XYAxis = ({ height, padding, xScale, yScale }) => {
  const xSettings = {
    translate: `translate(0, ${ height - padding })`,
    scale: xScale,
    orient: 'bottom'
  };
  const ySettings = {
    translate: `translate(${ padding }, 0)`,
    scale: yScale,
    orient: 'left'
  };

  return (
    <g>
      <Axis { ...xSettings }/>
      <Axis { ...ySettings }/>
    </g>
  );
};

export default XYAxis;
