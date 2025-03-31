import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [logintext, setLogintext] = useState("login");
  const handleLogin = (e) => {
    logintext === "login" ? setLogintext("logout") : setLogintext("login");
  };
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" alt="res-logo" src={LOGO_URL} />
      </div>
      <div className="nav-container">
        <ul>
          <li>Home </li>
          <li>About Us </li>
          <li>Cart </li>
          <li>Contact Us </li>
          <button className="login-btn" onClick={handleLogin}>
            {logintext}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
