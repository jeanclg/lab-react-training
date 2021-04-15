import React from 'react';
import MaxWithoutGlass from './maxence.png';
import MaxWithGlass from './maxence-glasses.png';
import './ClickablePicture.css';

class ClickablePicture extends React.Component {
  state = {
    glass: false,
    img: MaxWithoutGlass,
  };

  putGlass = () => {
    if (!this.state.glass) {
      this.setState({ glass: true });
      this.setState({ img: MaxWithGlass });
    } else {
      this.setState({ glass: false });
      this.setState({ img: MaxWithoutGlass });
    }
  };

  render() {
    return (
      <img src={this.state.img} className="img-glass" onClick={this.putGlass} />
    );
  }
}

export default ClickablePicture;
