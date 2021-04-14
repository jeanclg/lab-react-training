import React from 'react';

const BoxColor = (props) => {
  return (
    <h1 style={{ backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})` }}>
      rgb({props.r},{props.g},{props.b})
    </h1>
  );
};

export default BoxColor;
