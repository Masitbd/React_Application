import React, { Component } from "react";

class Setstate extends Component {
  constructor() {
    super();
    this.state = {
      name: "Murad",
    };
  }
  changeName(a) {
    this.setState({ name: a });
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button onClick={this.changeName.bind(this, "Rain")}>
          change Name
        </button>
      </div>
    );
  }
}

export default Setstate;
