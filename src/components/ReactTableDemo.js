import React, { Component } from "react";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import axios from "axios";
import { actions } from "react-table";

class ReactTableDemo extends Component {
  constructor() {
    super();
    this.state = {
      tableInformation: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((Response) => {
        this.setState({ tableInformation: Response.data });
      })
      .catch((error) => {
        alert("Something went wrong");
      });
  }
  render() {
    const tableData = this.state.tableInformation;
    /*
    [
      { Name: "Murad", Age: "28" },
      { Name: "Mamun", Age: "38" },
      { Name: "Kamal", Age: "27" },
    ];
    */
    const col = [
      { Header: "Name", accessor: "name" },
      { Header: "Capital", accessor: "capital" },
    ];
    return (
      <div>
        <ReactTable
          data={tableData}
          columns={col}
          defaultPageSize={5}
          pageSizeOption={[2, 4, 6, 8, 10]}
        />
      </div>
    );
  }
}

export default ReactTableDemo;
