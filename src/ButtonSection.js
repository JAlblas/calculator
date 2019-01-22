import React, { Component } from 'react';
import './ButtonSection.scss';
import Button from './Button.js'

class ButtonSection extends Component {
  render() {
    return (
      <div className="ButtonSection">
        {this.props.buttons.map((value, i) => {
          return <Button value={value} key={i} handler={this.props.handler} />;
        })}
      </div>
    );
  }
}

export default ButtonSection;
