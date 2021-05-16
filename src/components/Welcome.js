import React, { Component } from "react";

class Welcome extends Component {
  Test(para) {
    return alert(para);
  }
  render() {
    return (
      <div>
        <button onClick={this.Test.bind(this, "I am form parameter")}>
          click me
        </button>
        <h1>I am a class components {this.props.id}</h1>
      </div>
    );
  }
}

export default Welcome;
