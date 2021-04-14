import React from 'react';

const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const Random = (props) => {
  return (
    <label>
      Random value between {props.min} and {props.max} =>{' '}
      {getRandom(props.min, props.max)}
    </label>
  );
};

export default Random;
