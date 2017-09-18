import React from 'react';

class CoordinatesButton extends React.Component {
  handleClick(event, props) {
    const coords = [event.screenX, event.screenY];
    return props.onRecieveCoordinates(coords);
  }

  render() {
    return (
      <button onClick={this.handleClick}> </button>
    )
  }
}

export default CoordinatesButton;
