import React, { Component } from "react";

class Page3 extends Component {
  constructor({ match }) {
    super();
    this.state = {
      myname: match.params.username,
    };
  }
  render() {
    return <div>{this.state.myname}</div>;
  }
}

export default Page3;
