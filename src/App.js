import React, { Component } from 'react';
import './App.scss';
import Display from './Display.js';
import ButtonSection from './ButtonSection.js';

let buttons = [ "7", "8", "9", "%", "4", "5", "6", "x", "1", "2", "3", "-", "0", ".", "=", "+" ]

class App extends Component {

  constructor(props) {
    super(props);

    this.state = { value: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    console.log("CLICK");
    console.log(event)
    this.setState({value: 4});
  }

  render() {
    return (
      <div className="App">
        <Display value={this.state.value} />
        <ButtonSection buttons={buttons} handler={this.handleClick} />
      </div>
    );
  }
}

export default App;
