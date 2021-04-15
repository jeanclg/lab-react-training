import React from 'react';
import './Random.css';

const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const Random = (props) => {
  return (
    <label className="random-txt">
      Random value between {props.min} and {props.max} =>{' '}
      {getRandom(props.min, props.max)}
    </label>
  );
};

export default Random;
