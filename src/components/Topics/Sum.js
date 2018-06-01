import React, { Component } from "react";

class Sum extends Component {
  constructor() {
    super();

    this.state = {
      number1: 0,
      number2: 0,
      sum: null
    };
  }

  addNums() {
    this.setState({
      sum: +this.state.number1 + +this.state.number2
    });
  }

  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4>Sum</h4>
        <input
          className="inputLine"
          onChange={e => this.setState({ number1: e.target.value })}
        />
        <input
          className="inputLine"
          onChange={e => this.setState({ number2: e.target.value })}
        />
        <button className="confirmationButton" onClick={() => this.addNums()}>
          Add Numbers
        </button>
        <span className="resultsBox">{this.state.sum}</span>
      </div>
    );
  }
}

export default Sum;
