import React from 'react';
import './DriverCard.css';

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
    <div className="driver-container">
      <div className="image-cropper">
        <img src={props.img} alt="profile picture" />
      </div>
      <div className="driver-content">
        <label>
          <strong>{props.name}</strong>
        </label>
        <p>{getRate(props.rating)}</p>
        <label className="driver-car">
          {props.car.model} {props.car.licensePlate}
        </label>
      </div>
    </div>
  );
};

export default DriverCard;
