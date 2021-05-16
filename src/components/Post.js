import React, { Component } from "react";
import axios from "axios";

class Post extends Component {
  constructor() {
    super();
    this.state = {
      postData: "",
      posrResult: "",
    };
  }

  onChangeHandler = (event) => {
    var mydata = event.target.event;
    this.setState({ postData: mydata });
  };

  onClickHandler = () => {
    axios
      .post("http://ss.rabbil.com/test.php", this.state.postData)
      .then((Response) => {
        this.setState({ posrResult: Response.data });
        alert(this.state.posrResult);
      })
      .catch((error) => {
        alert("Something went wrong");
      });
  };
  render() {
    return (
      <div>
        <input onChange={this.onChangeHandler} type="text" />
        <button onClick={this.onClickHandler}>Send</button>
      </div>
    );
  }
}

export default Post;
