import React from "react";

function Hello(props) {
  function Dothis(b) {
    return alert(b);
  }

  return (
    <div>
      <button onClick={Dothis.bind(this, "I am from function")}>
        click me
      </button>
      <h1>Hello I am from functional components {props.name}</h1>
    </div>
  );
}

export default Hello;
