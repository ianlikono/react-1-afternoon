// import React, { Component } from "react";

// class EvenAndOdd extends Component {
//   constructor() {
//     super();
//     this.state = {
//       evenArray: [],
//       oddArray: [],
//       userInput: ""
//     };
//   }

//   assignEvenAndOdds(userInput) {
//     var arr = userInput.split(",");
//     var evens = [];
//     var odds = [];

//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] % 2 === 0) {
//         evens.push(parseInt(arr[i], 10));
//       } else {
//         odds.push(parseInt(arr[i], 10));
//       }
//     }

//     this.setState({ evenArray: evens, oddArray: odds });
//   }

//   handleInput(i) {
//     this.setState({ userInput: i });
//   }

//   render() {
//     return (
//       <div className="puzzleBox evenAndOddPB">
//         <h4>Even And Odds</h4>
//         <input
//           className="inputLine"
//           onChange={event => this.handleInput(event.target.value)}
//         />
//         <button
//           className="confirmationButton"
//           onClick={() => {
//             this.assignEvenAndOdds(this.state.userInput);
//           }}
//         >
//           Split
//         </button>
//         <span className="resultsBox">
//           Evens: {JSON.stringify(this.state.evenArray)}{" "}
//         </span>
//         <span className="resultsBox">
//           Odds: {JSON.stringify(this.state.oddArray)}{" "}
//         </span>
//       </div>
//     );
//   }
// }

// export default EvenAndOdd;

import React, { Component } from "react";

class EvenAndOdd extends Component {
  constructor() {
    super();
    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: ""
    };
  }

  handleChange(val) {
    this.setState({
      userInput: val
    });
  }

  updateEvenAndOdd(userInput) {
    var arr = userInput.split(",");
    var evens = [];
    var odds = [];

    // arr.map((cur,ind) => {
    //     if (cur%2 === 0) {
    //         evens.push(cur);
    //     }
    //     else {
    //         odds.push(cur);
    //     }
    // });

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        evens.push(parseInt(arr[i], 10));
        console.log(arr[i]);
      } else {
        odds.push(parseInt(arr[i], 10));
      }
    }

    this.setState({
      evenArray: evens,
      oddArray: odds
    });
  }

  render() {
    console.log(this.state);
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input
          className="inputLine"
          onChange={e => {
            this.handleChange(e.target.value);
          }}
        />
        <button
          className="confirmationButton"
          onClick={() => {
            this.updateEvenAndOdd(this.state.userInput);
          }}
        >
          Split
        </button>
        <span className="resultsBox">
          Evens [{this.state.evenArray.toString(", ")}]
        </span>
        <span className="resultsBox">
          Odds [{this.state.oddArray.toString(", ")}]
        </span>
      </div>
    );
  }
}

export default EvenAndOdd;
