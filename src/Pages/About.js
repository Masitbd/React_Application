import React, { Component } from "react";
import "../App.css";
import styles from "../components/Mycss.module.css";

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
      </div>
    );
  }
}

export default About;
