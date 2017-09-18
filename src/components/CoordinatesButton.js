import React from 'react';

class CoordinatesButton extends React.Component {
  render() {
    handleClick = (event) => {
      const coords = {X: event.xcoord, Y: event.ycoord};
      this.props.onRecieveCoordinates(coords);
    }
    
    return (
      <button onClick={handleClick()}> </button>
    )
  }
}

export default CoordinatesButton;
