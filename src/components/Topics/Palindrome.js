import React, { Component } from "react";

class Palindrome extends Component {
  constructor() {
    super();

    this.state = {
      userInput: "",
      palindrome: ""
    };
  }

  inputBox(val) {
    this.setState({
      userInput: val
    });
  }

  palindromeArray() {
    var reversed = this.state.userInput
      .split("")
      .reverse()
      .join("");
    this.setState({
      palindrome: this.state.userInput === reversed ? true : false
    });
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Palindrome</h4>
        <input
          className="inputLine"
          onChange={e => this.inputBox(e.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => this.palindromeArray()}
        >
          Check Palindrome
        </button>
        <span className="resultsBox">
          Palindrome: {JSON.stringify(this.state.palindrome)}
        </span>
      </div>
    );
  }
}

export default Palindrome;
