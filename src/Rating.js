import React from 'react';
import './Rating.css';

const getRate = (rate) => {
  let rateNumber = Number(rate);
  if (rateNumber < 1) {
    return '☆☆☆☆☆';
  } else if (rateNumber > 0.99 && rateNumber < 1.5) {
    return '★☆☆☆☆';
  } else if (rateNumber >= 1.5 && rateNumber < 2.5) {
    return '★★☆☆☆';
  } else if (rateNumber >= 2.5 && rateNumber < 3.5) {
    return '★★★☆☆';
  } else if (rateNumber >= 3.5 && rateNumber < 4.5) {
    return '★★★★☆';
  } else if (rateNumber >= 4.5) {
    return '★★★★★';
  }
};

const Rating = (props) => {
  return (
    <div className="rate">
      <p>{getRate(props.children)}</p>
    </div>
  );
};

export default Rating;
