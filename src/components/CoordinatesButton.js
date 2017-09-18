import React from 'react';

class CoordinatesButton extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.onRecieveCoordinates([event.clientX, event.clientY]);
  }

  render() {
    return (
      <button onClick={this.handleClick}> Coords</button>
    )
  }
}

export default CoordinatesButton;
