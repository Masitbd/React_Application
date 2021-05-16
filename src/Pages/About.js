import React, { Component } from "react";
import "../App.css";
import styles from "../components/Mycss.module.css";
import "../components/My.scss";

class About extends Component {
  render() {
    const TextStyle = {
      color: "green",
      margin: "20px",
      padding: "40px",
    };
    return (
      <div>
        <h1>About</h1>
        <h1 style={{ color: "red", backgroundColor: "blue" }}>
          Mohammed Murad Hossain Sarker
        </h1>
        <h2 style={TextStyle}>css object property check</h2>
        <h3 className="h3styletest">check external stylesheet from app.css</h3>
        <p className={styles.modulecsstest}>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before final copy is available.
        </p>
        <p className="textstyle">
          If there is a constructor() function in your component, this function
          will be called when the component gets initiated. The constructor
          function is where you initiate the component's properties. In React,
          component properties should be kept in an object called state. You
          will learn more about state later in this tutorial. The constructor
          function is also where you honor the inheritance of the parent
          component by including the super() statement, which executes the
          parent component's constructor function, and your component has access
          to all the functions of the parent component (React.Component).
        </p>
      </div>
    );
  }
}

export default About;
