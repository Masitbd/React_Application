import React, { Component } from "react";
import { Route } from "react-router-dom";
import Page1 from "../Pages/Page1";
import Page2 from "../Pages/Page2";
import Page3 from "../Pages/Page3";
import Home from "../Pages/Home";
import RedirectLogin from "../Pages/RedirectLogin";

class MyRouteAdvance extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/redirectloginin" component={RedirectLogin} />
        <Route path="/page1" component={Page1} />
        <Route path="/page2" component={Page2} />
        <Route path="/page3/:username" component={Page3} />
      </div>
    );
  }
}

export default MyRouteAdvance;
