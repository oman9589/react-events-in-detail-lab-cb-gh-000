import React from 'react';

class CoordinatesButton extends React.Component {
  const handleClick = ({ onRecieveCoordinates }) => {
    const coords = [event.screenX, event.screenY];
    return onRecieveCoordinates(coords);
  }

  render() {
    return (
      <button onClick={this.handleClick}> </button>
    )
  }
}

export default CoordinatesButton;
