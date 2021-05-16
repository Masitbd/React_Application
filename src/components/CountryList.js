import React, { Component } from "react";
import axios from "axios";

class CountryList extends Component {
  constructor() {
    super();

    this.state = {
      mydata: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((response) => {
        this.setState({ mydata: response.data });
      })
      .catch((error) => {});
  }
  render() {
    const myList = this.state.mydata;
    const countryName = myList.map((data) => {
      return <li>{data.name}</li>;
    });
    return (
      <div className="container">
        <ul>
          <li>{countryName}</li>
        </ul>
      </div>
    );
  }
}

export default CountryList;
