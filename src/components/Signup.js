import React, { Component } from "react";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      fname: " ",
      lname: " ",
      email: "",
      mobilenumber: "",
    };
  }

  onChangeHandler = (event) => {
    var inputName = event.target.name;
    var inputValue = event.target.value;
    this.setState({ [inputName]: inputValue });

    if (inputName === "fname") {
      var namePatern = /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/;
      if (!namePatern.test(inputValue)) {
        this.setState({ fname: "Name is not valid" });
      }
    }
    if (inputName === "lname") {
    }

    if (inputName === "email") {
      var emailPatern = /^\S+@\S+\.\S+$/;
      if (!emailPatern.test(inputValue)) {
        this.setState({ email: "email is not valid" });
      }
    }
  };
  render() {
    return (
      <div>
        <p>First Name:{this.state.fname}</p>
        <p>Last Name:{this.state.lname}</p>
        <p>Email Adderss:{this.state.email}</p>
        <p>Mobile Number:{this.state.mobilenumber}</p>
        <form>
          <input
            onChange={this.onChangeHandler}
            name="fname"
            type="text"
            placeholder="First Name"
          ></input>
          <br></br>
          <input
            onChange={this.onChangeHandler}
            name="lname"
            type="text"
            placeholder="Last Name"
          ></input>
          <br></br>
          <input
            onChange={this.onChangeHandler}
            name="email"
            type="text"
            placeholder="Email address"
          ></input>
          <br></br>
          <input
            onChange={this.onChangeHandler}
            name="mobilenumber"
            type="text"
            placeholder="Enter mobile number"
          ></input>
          <br></br>
          <input name="Submit" type="submit" value="Save Now"></input>
        </form>
      </div>
    );
  }
}

export default Signup;
