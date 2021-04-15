import React from 'react';

class Carousel extends React.Component {
  state = {
    count: 0,
  };

  increment = () => {
    if (this.state.count < this.props.imgs.length - 1)
      this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    if (this.state.count > 0) this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.decrement}>Left</button>
        <img src={this.props.imgs[this.state.count]} />
        <button onClick={this.increment}>Right</button>
      </div>
    );
  }
}

export default Carousel;
