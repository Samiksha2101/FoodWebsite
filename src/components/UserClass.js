import React from "react";
import { Component } from "react";
class UserClass extends Component {
  constructor(props) {
    super(props);
    // console.log("child constructor call");
    this.state = {
      userInfo: {
        name: "dummy",
        location: "dummy",
      },
    };
  }

  async componentDidMount() {
    // console.log("child componentDidMount call");
    const userInfo = await fetch("https://api.github.com/users/samiksha2101");
    const json = await userInfo.json();
    // console.log(json);
    this.setState({ userInfo: json });
  }

  componentDidUpdate() {
    console.log("component did update");
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }
  render() {
    // console.log("child render call");
    const { name, location } = this.state.userInfo;
    return (
      <div className="user-card">
        {/* <h2>Name:{name}</h2> */}
        <h2>Location:{location}</h2>
      </div>
    );
  }
}
export default UserClass;
