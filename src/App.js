import React, { Component } from 'react';
import './App.scss';
import Display from './Display.js';
import ButtonSection from './ButtonSection.js';

let buttons = [ {value: "7", identifier: "seven"}, {value: "8", identifier: "eight"},
                {value: "9", identifier: "nine"}, {value: "%", identifier: "divide"},
                {value: "4", identifier: "four"}, {value: "5", identifier: "five"},
                {value: "6", identifier: "six"}, {value: "x", identifier: "multiply"},
                {value: "1", identifier: "one"}, {value: "2", identifier: "two"},
                {value: "3", identifier: "three"}, {value: "-", identifier: "subtract"},
                {value: "0", identifier: "zero"}, {value: ".", identifier: "decimal"},
                {value: "=", identifier: "equals"}, {value: "+", identifier: "add"},
                {value: "C", identifier: "clear"} ]

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
