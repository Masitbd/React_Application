import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Page1 extends Component {
  render() {
    if (sessionStorage.getItem("userName") == null) {
      return <Redirect to="/redirectloginin" />;
    } else {
      return <div>This is page1</div>;
    }
  }
}
export default Page1;
