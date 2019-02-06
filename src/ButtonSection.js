import React, { Component } from 'react';
import './ButtonSection.scss';
import Button from './Button.js'

class ButtonSection extends Component {
  render() {
    return (
      <div className="ButtonSection">
        {this.props.buttons.map((object, i) => {
          return <Button value={object.value} key={i} id={object.identifier} handler={this.props.handler} />;
        })}
      </div>
    );
  }
}

export default ButtonSection;
