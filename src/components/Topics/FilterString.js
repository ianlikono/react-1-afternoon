import React, { Component } from "react";

class FilterString extends Component {
  constructor() {
    super();
    this.state = {
      unfilteredArray: [
        "I am fast",
        "I am quick",
        "You are smart",
        "You are cool",
        "You are attractice",
        "He is over there",
        "I know that",
        "I love Programming",
        "Team Jin is Number One"
      ],
      userInput: "",
      filteredArray: []
    };
  }

  setInput(val) {
    this.setState({
      userInput: val
    });
  }

  filterArray() {
    this.setState({
      filteredArray: this.state.unfilteredArray.filter(e =>
        e.includes(this.state.userInput)
      )
    });
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText">
          {JSON.stringify(this.state.unfilteredArray)}
        </span>
        <input
          className="inputLine"
          onChange={e => this.setInput(e.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => this.filterArray()}
        >
          Filter
        </button>
        <span className="resultsBox filterStringRB">
          Filtered Array: {JSON.stringify(this.state.filteredArray)}
        </span>
      </div>
    );
  }
}

export default FilterString;
