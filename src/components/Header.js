import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useOnlinestatus } from "../utils/useOnlinestatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import React from "react";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  const [online, setonline] = useState(true);
  const onlinestatus = useOnlinestatus();

  // context
  const {user}=useContext(UserContext);
  console.log(user);



  return (
    <div className="navbar">
      <div className="logo">
        <img src={LOGO_URL} />
      </div>

      <div className="nav-items">
        <ul>
          <li>Online: {onlinestatus ? "\u2705" : "\u274C"}</li>

          <li>
            <Link to="/">Home</Link>{" "}
          </li>

          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <button
            className="login-Btn"
            onClick={() => {
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
            }}
          >
            {btnName}
          </button>

        <li className="login-context">{user}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
