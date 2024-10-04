import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";
class About extends Component {
  constructor(props) {
    super(props);
    // console.log("parent construcor");
  }

  render() {
    return (
      <div>
        {/* <h1>This is About Us</h1> */}
        <div>
          Logged in User :
          <UserContext.Consumer>
            {({ loggedInUser, name }) => (
              <h1 className="font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        {console.log("About rendered")}
        <UserClass></UserClass>
      </div>
    );
  }
}
export default About;
// react batches the render(everything happen in virtual dom) , because render phase is so fast then commit happens and updates the DOM
