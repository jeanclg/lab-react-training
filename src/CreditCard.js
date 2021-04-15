import React from 'react';
import Visa from './visa.png';
import Master from './master-card.svg';
import './CreditCard.css';

const getMonth = (num) => {
  if (num < 10) {
    return '0' + num;
  } else {
    return num;
  }
};

const getImage = (img) => {
  if (img === 'Visa') {
    return Visa;
  } else {
    return Master;
  }
};

const CreditCard = (props) => {
  return (
    <div
      className="card-container"
      style={{ backgroundColor: `${props.bgColor}`, color: `${props.color}` }}
    >
      <div className="img-container">
        <img className="img-card" src={getImage(props.type)}></img>
      </div>
      <p className="card-number">•••• •••• •••• {props.number.substr(-4)} </p>
      <div className="exp-bank-card">
        <p>
          Expires {getMonth(props.expirationMonth)}/
          {props.expirationYear % 2000}
        </p>
        <p>{props.bank}</p>
      </div>
      <p>{props.owner}</p>
    </div>
  );
};

export default CreditCard;
