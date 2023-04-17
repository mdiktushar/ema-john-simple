import React, { useContext } from "react";
import "./Header.css";
import logo from "../../../assets/images/Logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Header = () => {
  const {user} = useContext(AuthContext)
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div className="nav">
        <Link to={"/"}>Shop</Link>
        <Link to={"/orders"}>Order</Link>
        <Link to={"/inventory"}>Inventory</Link>
        <Link to={"/login"}>Login</Link>
        <Link to={"/signUp"}>SignUp</Link>
        {user && <Link>{user.displayName}</Link>}
      </div>
    </nav>
  );
};

export default Header;
