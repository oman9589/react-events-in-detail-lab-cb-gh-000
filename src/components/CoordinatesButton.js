import React from 'react';

class CoordinatesButton extends React.Component {
  handleClick = (this.props.onRecieveCoordinates) => {
    const coords = [event.screenX, event.screenY];
    onRecieveCoordinates(coords);
  }

  render() {
    return (
      <button onClick={this.handleClick}> </button>
    )
  }
}

export default CoordinatesButton;
