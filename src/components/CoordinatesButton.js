import React from 'react';

class CoordinatesButton extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }
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
