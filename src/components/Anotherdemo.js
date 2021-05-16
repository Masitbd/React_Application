import React, { Component } from "react";
import ReactDom from "react-dom";

class Anotherdemo extends Component {
  changeIMG() {
    var imgID = document.getElementById("imgID");
    ReactDom.findDOMNode(imgID).src =
      "https://pngimg.com/uploads/duck/duck_PNG5011.png";
  }
  render() {
    return (
      <div>
        <div>
          <button onClick={this.changeIMG}>change</button>
          <img
            id="imgID"
            src="https://pngimg.com/uploads/apple/apple_PNG12405.png"
          ></img>
        </div>
      </div>
    );
  }
}

export default Anotherdemo;
