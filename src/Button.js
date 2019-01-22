import React, { Component } from 'react';
import './Button.scss';

class Button extends Component {
  render() {
    return (
      <button className="Button" id={this.props.id} onClick={this.props.handler}>
        {this.props.value}
      </button>
    );
  }
}

export default Button;
