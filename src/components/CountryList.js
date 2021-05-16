import React, { Component } from "react";
import axios from "axios";

class CountryList extends Component {
  componentDidMount() {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {});
  }
  render() {
    return <div></div>;
  }
}

export default CountryList;
