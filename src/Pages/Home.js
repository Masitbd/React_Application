import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Home extends Component {
  render() {
    if (sessionStorage.getItem("userName") == null) {
      return <Redirect to="/redirectloginin" />;
    } else {
      return <div>Home page</div>;
    }
  }
}

export default Home;
