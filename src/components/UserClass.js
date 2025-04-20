import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log("child constructor");
    // this.state = {
    //   count: 0,
    //   count2: 5,
    // };
    this.state = {
      userInfo: {
        name: "Dummy name",
        bio: "Dummy bio",
        location: "Dummy location",
        avatar_url: "Dummy avatar_url",
      },
    };
  }
  async componentDidMount() {
    // Api calls
    const response = await fetch(
      "https://api.github.com/users/dev-abhishekanand"
    );
    const data = await response.json();
    this.setState({
      userInfo: data,
    });
    // console.log("data", data);
    // console.log("child componentDidMount");
  }
  componentDidUpdate() {
    // console.log("child componentDidUpdate");
  }

  componentWillUnmount() {
    // console.log("child componentWillUnmount");
  }
  render() {
    // console.log("child render");
    const { name, login, organizations_url } = this.state.userInfo;

    // console.log(bio, location);
    return (
      <div className="user-class">
        <h1>Count {this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          update count
        </button>
        {/* <h1>Count2 {this.state.count2}</h1> */}
        <img src={this.state.userInfo.avatar_url} alt="avatar" />

        <h1>{name}</h1>
        <h2>Contact: 1234567890</h2>
        <h3>Address: {login}</h3>
        <h3>Bio: {organizations_url}</h3>
        <h3>Hobbies: Coding, Reading, Traveling</h3>
        <h3>Skills: React, Node.js, Express, MongoDB</h3>
      </div>
    );
  }
}
export default UserClass;
