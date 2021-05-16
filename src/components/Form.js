import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
    };
  }

  onChangeHandler = (event) => {
    var myName = event.target.name;
    var myvalue = event.target.value;
    this.setState({ [myName]: myvalue });
  };

  onsubmitHandler = () => {
    alert(this.state.username);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onsubmitHandler}>
          <p>My first form</p>
          <p>{this.state.username}</p>
          <input
            name="username"
            onChange={this.onChangeHandler}
            type="text"
            placeholder="Your name"
          ></input>
          <input type="submit" value="submit now"></input>
        </form>
      </div>
    );
  }
}

export default Form;
