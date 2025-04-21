import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import { useOnlineStatus } from "../hooks/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [logintext, setLogintext] = useState("login");
  // useEffect(() => {
  //   console.log("useEffect called");
  // }, []);
  const handleLogin = (e) => {
    logintext === "login" ? setLogintext("logout") : setLogintext("login");
  };
  const userData = useContext(UserContext); // useContext
  const onlineStatus = useOnlineStatus(); // custom hook

  const cartItems = useSelector((store) => store.cart.items); // redux store
  return (
    <div className="flex justify-between shadow-lg bg-emerald-950 text-white">
      <div className="logo-container">
        <img className="w-30" alt="res-logo" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-5 m-5 gap-5">
          <li>Online Status:: {onlineStatus ? "✅" : "🛑"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/cart">Cart- {cartItems.length}</Link>
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
          <li>{userData?.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
