import React from 'react';

class CoordinatesButton extends React.Component {
  handleClick = () => {
    this.props.onRecieveCoordinates([event.clientX, event.clientY]);
  }

  render() {
    return (
      <button onClick={this.handleClick}> </button>
    )
  }
}

export default CoordinatesButton;
