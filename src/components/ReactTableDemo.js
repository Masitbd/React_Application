import React, { Component } from "react";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";

class ReactTableDemo extends Component {
  render() {
    const tableData = [
      { Name: "Murad", Age: "28" },
      { Name: "Mamun", Age: "38" },
      { Name: "Kamal", Age: "27" },
    ];
    const col = [
      { Header: "Name", accessor: "Name" },
      { Header: "Age", accessor: "Age" },
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
