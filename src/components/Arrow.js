import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const AlertMe = (b) => {
  alert(b);
};

const Arrow = () => {
  return (
    <button
      onClick={AlertMe.bind(this, "This is from arrow function")}
      className="btn btn-danger m-5"
    ></button>
  );
};

export default Arrow;
