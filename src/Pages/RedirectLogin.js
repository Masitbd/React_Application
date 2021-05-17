import React, { Component } from "react";

class RedirectLogin extends Component {
  login = () => {
    sessionStorage("userName", "Murad");
  };
  render() {
    return (
      <div>
        <button onAuxClick={this.login}>LogIn</button>
      </div>
    );
  }
}

export default RedirectLogin;
