import React, { Component } from "react";

class Listview extends Component {
  render() {
    const country = ["Bangladesh", "india", "pakistan", "Nepal"];
    const dataItems = country.map((mydata) => {
      return <li>{mydata}</li>;
    });
    return (
      <div>
        <ol>{dataItems}</ol>
      </div>
    );
  }
}

export default Listview;
