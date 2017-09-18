import React from 'react';

class CoordinatesButton extends React.Component {
  handleClick = (event) => {
    const coords = {X: event.screenX, Y: event.screenY};

    this.props.onRecieveCoordinates(coords);
  }

  render() {
    return (
      <button onClick={this.handleClick}> </button>
    )
  }
}

export default CoordinatesButton;
