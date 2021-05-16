import React, { Component } from "react";

class Selectdropdown extends Component {
  constructor() {
    super();
    this.state = {
      city1: "Dhaka",
      city2: "Chittagonj",
      city3: "Rajshi",
      city4: "Khulna",
      show: " ",
      Auto: "Rajshi",
    };
  }

  onchangeHandler = (event) => {
    var SelectedValue = event.target.value;
    this.setState({ show: SelectedValue, auto: SelectedValue });
  };

  render() {
    return (
      <div>
        <p>{this.state.show}</p>
        <select onChange={this.onchangeHandler} value={this.state.auto}>
          <option>{this.state.city1}</option>
          <option>{this.state.city2}</option>
          <option>{this.state.city3}</option>
          <option>{this.state.city4}</option>
        </select>
      </div>
    );
  }
}

export default Selectdropdown;
