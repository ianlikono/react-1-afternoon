import React, { Component } from "react";

class FilterObject extends Component {
  constructor() {
    super();
    this.state = {
      unFilteredArray: [
        { student: "Aaron", age: 18 },
        { student: "Jarid", size: 130 },
        { student: "Joe", size: 140 }
      ],
      userInput: "",
      filteredArray: []
    };
  }

  inputChange(val) {
    this.setState({
      userInput: val
    });
  }

  filterOriginalArray() {
    var newArray = this.state.unFilteredArray.filter(
      cur => cur[this.state.userInput]
    );

    this.setState({
      filteredArray: newArray
    });
  }

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">
          {JSON.stringify(this.state.unFilteredArray)}
        </span>
        <input
          className="inputLine"
          onChange={e => {
            this.inputChange(e.target.value);
          }}
        />
        <button
          className="confirmationButton"
          onClick={() => this.filterOriginalArray()}
        >
          Filter Array
        </button>
        <span className="resultsBox filterObjectRB">
          {" "}
          {JSON.stringify(this.state.filteredArray)}{" "}
        </span>
      </div>
    );
  }
}

export default FilterObject;

// import React, { Component } from "react";

// export default class FilterObject extends Component {
//   constructor() {
//     super();

//     this.state = {
//       employees: [
//         {
//           name: "Jimmy Joe",
//           title: "Hack0r",
//           age: 12
//         },
//         {
//           name: "Jeremy Schrader",
//           age: 24,
//           hairColor: "brown"
//         },
//         {
//           name: "Carly Armstrong",
//           title: "CEO"
//         }
//       ],

//       userInput: "",
//       filteredEmployees: []
//     };
//   }

//   handleChange(val) {
//     this.setState({ userInput: val });
//   }

//   filterEmployees(prop) {
//     var employees = this.state.employees;
//     var filteredEmployees = [];

//     for (var i = 0; i < employees.length; i++) {
//       if (employees[i].hasOwnProperty(prop)) {
//         filteredEmployees.push(employees[i]);
//       }
//     }

//     this.setState({ filteredEmployees: filteredEmployees });
//   }

//   render() {
//     return (
//       <div className="puzzleBox filterObjectPB">
//         <h4> Filter Object </h4>
//         <span className="puzzleText">
//           {" "}
//           Original: {JSON.stringify(this.state.employees, null, 10)}{" "}
//         </span>
//         <input
//           className="inputLine"
//           onChange={e => this.handleChange(e.target.value)}
//         />
//         <button
//           className="confirmationButton"
//           onClick={() => this.filterEmployees(this.state.userInput)}
//         >
//           {" "}
//           Filter{" "}
//         </button>
//         <span className="resultsBox filterObjectRB">
//           {" "}
//           Filtered: {JSON.stringify(
//             this.state.filteredEmployees,
//             null,
//             10
//           )}{" "}
//         </span>
//       </div>
//     );
//   }
// }
