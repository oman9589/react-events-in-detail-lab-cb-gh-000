import React from 'react';

class DelayedButton extends React.Component {
  handleClick = (onRecieveCoordinates) => {
    return (
      <p>hello!</p>
    );
  }

  render() {
    return (
      <button onClick={this.handleClick}> </button>
    )
  }
}

export default DelayedButton;
