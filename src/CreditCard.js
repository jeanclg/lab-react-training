import React from 'react';
import Visa from './visa.png';
import Master from './master-card.svg';

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
      style={{ backgroundColor: `${props.bgColor}`, color: `${props.color}` }}
    >
      <img src={getImage(props.type)}></img>
      <p>•••• •••• •••• {props.number.substr(-4)} </p>
      <p>
        Expires {getMonth(props.expirationMonth)}/{props.expirationYear % 2000}
      </p>
      <p>{props.bank}</p>
      <p>{props.owner}</p>
    </div>
  );
};

export default CreditCard;
