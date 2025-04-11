import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import { useOnlineStatus } from "../utils/useOnlineStatus";

const Header = () => {
  const [logintext, setLogintext] = useState("login");
  useEffect(() => {
    console.log("useEffect called");
  }, []);
  const handleLogin = (e) => {
    logintext === "login" ? setLogintext("logout") : setLogintext("login");
  };

  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" alt="res-logo" src={LOGO_URL} />
      </div>
      <div className="nav-container">
        <ul>
          <li>Online Status:: {onlineStatus ? "✅" : "🛑"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link to="/contact">ContactUS</Link>
          </li>
          <button className="login-btn" onClick={handleLogin}>
            {logintext}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
