import React, { Component } from "react";
import ReactDom from "react-dom";

class Newdemo extends Component {
  myFun() {
    var container = document.getElementById("myID");
    var element = <h1> My name is rain, I am from react dom</h1>;
    var calback = function name() {
      alert("Hi i am from callback");
    };

    ReactDom.render(element, container, calback);
  }
  render() {
    return (
      <div>
        <button onClick={this.myFun}>Change</button>
        <h1 id="myID">My name is Murad</h1>
      </div>
    );
  }
}

export default Newdemo;
