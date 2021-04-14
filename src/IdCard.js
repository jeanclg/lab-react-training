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
      <img src={props.picture} alt="profile picture" />
      <div class="content">
        <label>First Name: {props.firstName}</label>
        <label>Last Name: {props.lastName}</label>
        <label>Gender: {props.gender}</label>
        <label>Height: {getMeter(props.height)}m</label>
        <label>
          Birth: {formatarData(props.birth.toLocaleDateString('en-US'))}
        </label>
      </div>
    </div>
  );
};

export default IdCard;
