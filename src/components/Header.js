import { useState } from "react";
import { LOGO } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [clicked, setClicked] = useState("Log In");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      {console.log("header rendered")}
      <div className="logo-container">
        <img className="logo" src={LOGO} alt="logo"></img>
      </div>
      <div className="nav-items">
        <ul className="list">
          <li>Online Status {onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>Cart</li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <button
            className="login-btn"
            onClick={() =>
              clicked === "Log In"
                ? setClicked("Log Out")
                : setClicked("Log In")
            }
          >
            {clicked}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
