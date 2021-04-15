import React from 'react';
import './IdCard.css';

const getMeter = (height) => {
  return (height / 100).toFixed(2);
};

function formatarData(str) {
  var partes = str.split('/').map(Number);
  var data = new Date(partes[2], partes[1] - 1, partes[0]);
  return data.toLocaleString([], {
    weekday: 'short',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

var data = '18/05/17';
console.log(formatarData(data));

const IdCard = (props) => {
  return (
    <div className="iteration-1">
      <img className="img" src={props.picture} alt="profile picture" />
      <div class="content">
        <label>
          <strong>First name:</strong> {props.firstName}
        </label>
        <label>
          <strong>Last name:</strong> {props.lastName}
        </label>
        <label>
          <strong>Gender:</strong> {props.gender}
        </label>
        <label>
          <strong>Height:</strong> {getMeter(props.height)}m
        </label>
        <label>
          <strong>Birth:</strong>{' '}
          {formatarData(props.birth.toLocaleDateString('en-US'))}
        </label>
      </div>
    </div>
  );
};

export default IdCard;
