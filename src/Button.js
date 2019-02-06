import React, { Component } from 'react';
import './Button.scss';

class Button extends Component {
  render() {
    return (
      <button className="Button" id={this.props.id} onClick={(e) => this.props.handler(this.props.value, e)}>
        {this.props.value}
      </button>
    );
  }
}

export default Button;
