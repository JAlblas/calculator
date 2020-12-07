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

    this.state = {  value1: "",
                    value2: "",
                    operation: "",
                    displayValue: ""
                 };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(value, event) {

    if(value === "%" || value === "x" || value === "-" || value === "+"
      || value === "=" || value === "C" ) {


      if (value !== "=") {
        if (value === "C") {
          this.setState({value1: "", value2: "", operation: "", displayValue: ""});
        } else {

          this.setState({operation: value});
          if (this.state.value1 !== "" && this.state.value2 !== "") {
            if (this.state.operation === "+") {
              this.setState({displayValue: parseFloat(this.state.value1) + parseFloat(this.state.value2),
                value1: parseFloat(this.state.value1) + parseFloat(this.state.value2),
                value2: ""});
            } else if (this.state.operation === "-") {
              this.setState({displayValue: parseFloat(this.state.value1) - parseFloat(this.state.value2),
                value1: parseFloat(this.state.value1) - parseFloat(this.state.value2),
                value2: ""});
            } else if (this.state.operation === "x") {
              this.setState({displayValue: parseFloat(this.state.value1) * parseFloat(this.state.value2),
                value1: parseFloat(this.state.value1) * parseFloat(this.state.value2),
                value2: ""});
            } else if (this.state.operation === "%") {
              this.setState({displayValue: parseFloat(this.state.value1) / parseFloat(this.state.value2),
                value1: parseFloat(this.state.value1) / parseFloat(this.state.value2),
                value2: ""});
            }
          }
        }

      } else {
        // = - Calculate
        if (this.state.operation === "+") {
          this.setState({displayValue: parseFloat(this.state.value1) + parseFloat(this.state.value2),
            value1: parseFloat(this.state.value1) + parseFloat(this.state.value2),
            value2: "",
            operation: ""});
        } else if (this.state.operation === "-") {
          this.setState({displayValue: parseFloat(this.state.value1) - parseFloat(this.state.value2),
            value1: parseFloat(this.state.value1) - parseFloat(this.state.value2),
            value2: "",
            operation: ""});
        } else if (this.state.operation === "x") {
          this.setState({displayValue: parseFloat(this.state.value1) * parseFloat(this.state.value2),
            value1: parseFloat(this.state.value1) * parseFloat(this.state.value2),
            value2: "",
            operation: ""});
        } else if (this.state.operation === "%") {
          this.setState({displayValue: parseFloat(this.state.value1) / parseFloat(this.state.value2),
            value1: parseFloat(this.state.value1) / parseFloat(this.state.value2),
            value2: "",
            operation: ""});
        }

      }
    } else {
      if (value === "." && this.state.displayValue.indexOf(".") > -1) {
        return;
      }

      if (value === "0" && this.state.displayValue.indexOf("0") > -1) {
        return;
      }

      // If number is typed, or dot
      if (this.state.operation === "") {
        this.setState({value1:  this.state.value1 + value, displayValue: this.state.displayValue + value});
      } else {
        this.setState({value2:  this.state.value2 + value, displayValue: this.state.value2 === "" ? value : this.state.displayValue + value});
      }
    }

  }

  render() {
    return (
      <div className="App">
        <Display value={this.state.displayValue} />
        <ButtonSection buttons={buttons} handler={this.handleClick} />
      </div>
    );
  }
}

export default App;
