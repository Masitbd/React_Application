import React, { Component } from "react";

class StateWelcome extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
    /*
    this.state = {
      name: "Murad",
      age: "10",
    };
    */

    let obj = {
      name: "Murad",
      age: "10",
      status: ["fulltime", "parttime", "casual"],
    };
    this.state = obj;
  }

  render() {
    return (
      <div>
        <h1>My name is = {this.state.name} </h1>
        <h1>My age is = {this.state.age}</h1>
        <h1>My age is = {this.state.status[1]}</h1>
      </div>
    );
  }
}

export default StateWelcome;
