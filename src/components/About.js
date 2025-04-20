import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

// const About = () => {
//   return (
//     <div>
//       <h1>About Us Page</h1>
//       {/* <User name={"Abhishek Anand (function)"} /> */}
//       <UserClass name={"Abhishek Anand (class)"} place="London" />
//     </div>
//   );
// };

class About extends React.Component {
  constructor() {
    super();
    // console.log("Parent constructor");
  }
  componentDidMount() {
    // console.log("Parent componentDidMount");
  }

  componentDidUpdate() {
    // console.log("Parent componentDidUpdate");
  }
  render() {
    // console.log("parent render");
    return (
      <div>
        <h1>About Us Page</h1>
        <UserContext.Consumer>
          {({ loggedInUser }) => <h1 className="font-bold">{loggedInUser}</h1>}
        </UserContext.Consumer>
        {/* <User name={"Abhishek Anand (function)"} /> */}
        <UserClass />
      </div>
    );
  }
}
export default About;
