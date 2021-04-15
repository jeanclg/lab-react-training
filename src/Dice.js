import React from 'react';
import Dice0 from './dice-empty.png';
import Dice1 from './dice1.png';
import Dice2 from './dice2.png';
import Dice3 from './dice3.png';
import Dice4 from './dice4.png';
import Dice5 from './dice5.png';
import Dice6 from './dice6.png';
import './Dice.css';

class Dice extends React.Component {
  state = {
    min: 1,
    max: 6,
    img: Dice1,
  };

  getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  getImage = () => {
    setTimeout(() => {
      let num = this.getRandom(this.state.min, this.state.max);
      switch (num) {
        case 1:
          return this.setState({ img: Dice1 });
        case 2:
          return this.setState({ img: Dice2 });
        case 3:
          return this.setState({ img: Dice3 });
        case 4:
          return this.setState({ img: Dice4 });
        case 5:
          return this.setState({ img: Dice5 });
        case 6:
          return this.setState({ img: Dice6 });
      }
    }, 1000);
    this.setState({ img: Dice0 });
  };

  render() {
    return <img src={this.state.img} onClick={this.getImage} />;
  }
}

export default Dice;
