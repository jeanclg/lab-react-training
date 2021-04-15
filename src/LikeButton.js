import React from 'react';
import './LikeButton.css';

class LikeButton extends React.Component {
  state = {
    count: 0,
  };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <button className="like-button" onClick={this.increment}>
        {this.state.count} Likes
      </button>
    );
  }
}

export default LikeButton;
