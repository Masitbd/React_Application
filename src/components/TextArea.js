import React, { Component } from "react";

class TextArea extends Component {
  constructor() {
    super();
    this.state = {
      desc: " ",
      userInput: "",
    };
  }

  onchangeHandler = (event) => {
    var mydesc = event.target.value;
    this.setState({ userInput: mydesc });
  };

  render() {
    return (
      <div>
        <textarea
          onChange={this.onchangeHandler}
          placeholder="Enter your text"
        />
        <p>Statr to write user input:{this.state.userInput}</p>
      </div>
    );
  }
}

export default TextArea;
