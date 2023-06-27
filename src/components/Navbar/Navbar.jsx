import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <div className="logo" onClick={() => navigate("/")}>
        <img src={process.env.PUBLIC_URL + "/logo.svg"} alt="logo-error" />
      </div>
      <div className="nav-item-menu">
        <button onClick={() => navigate("/register")}>Sign up</button>/
        <button onClick={() => navigate("/login")}>Log in</button>
      </div>
    </nav>
  );
};

export default Navbar;
