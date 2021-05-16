import React, { Component } from "react";

class JsonList extends Component {
  render() {
    const mylist = [
      {
        city: "Dhaka",
        zipcode: "2600",
      },
      {
        city: "Rajshi",
        zipcode: "2500",
      },
      {
        city: "Rajgpur",
        zipcode: "2400",
      },
    ];

    const dataitems = mylist.map((data) => {
      return <option>{data.city}</option>;
    });
    return (
      <div>
        <select>{dataitems}</select>
      </div>
    );
  }
}

export default JsonList;
