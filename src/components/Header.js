import { useState } from "react";
import { LOGO } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [clicked, setClicked] = useState("Log In");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between bg-orange-300 shadow-lg mb-2">
      {/* {console.log("header rendered")} */}
      <div className="logo-container">
        <img className="w-24" src={LOGO} alt="logo"></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-3">Online Status {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-3">
            <Link to="/">Home</Link>
          </li>
          <li className="px-3">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-3">Cart</li>
          <li className="px-3">
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
