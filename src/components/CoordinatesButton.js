import React from 'react';

class CoordinatesButton extends React.Component {
  handleClick = (event) => {
    const coords = {X: event.xcoord, Y: event.ycoord};
    this.props.onRecieveCoordinates(coords);
  }

  render() {
    return (
      <button onClick={handleClick()}> </button>
    )
  }
}
