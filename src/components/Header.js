import { useContext, useState } from "react";
import { LOGO } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const [clicked, setClicked] = useState("Log In");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  //subscribing to store using a selector
  const cartItems = useSelector((store) => store.cart.items);

  // console.log(loggedInUser);
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
          <li className="px-3 ">
            <Link to="/cart">Cart (Items - {cartItems.length})</Link>
          </li>
          <li className="px-3">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-3">
            <Link to="/grocery">Grocery</Link>
          </li>
          <button
            className="login-btn bg-gray-50 rounded-lg px-3"
            onClick={() =>
              clicked === "Log In"
                ? setClicked("Log Out")
                : setClicked("Log In")
            }
          >
            {clicked}
          </button>
          <li className="px-3 font-bold">Logged In : {loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
