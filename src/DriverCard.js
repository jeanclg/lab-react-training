import React from 'react';

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

const DriverCard = (props) => {
  return (
    <div>
      <img src={props.img} alt="profile picture" />
      <label>{props.name}</label>
      <label>
        {props.car.model} {props.car.licensePlate}
      </label>
      <p>{getRate(props.rating)}</p>
    </div>
  );
};

export default DriverCard;
