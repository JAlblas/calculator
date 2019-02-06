import React, { Component } from 'react';
import './Display.scss';

class Display extends Component {
  render() {
    return (
      <div className="Display" id="display">
        <p>{this.props.value === "" ? 0 : this.props.value }</p>
      </div>
    );
  }
}

export default Display;
