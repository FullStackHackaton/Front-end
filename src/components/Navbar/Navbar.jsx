import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { logout } from "../../store/auth/authActions";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const username = JSON.parse(localStorage.getItem("username"));

  return (
    <nav>
      <div className="logo" onClick={() => navigate("/")}>
        <img src={process.env.PUBLIC_URL + "/logo.svg"} alt="logo-error" />
      </div>
      <div className="nav-item-menu">
        {username ? (
          <>
            <p>{username}</p>
            <button onClick={() => dispatch(logout(navigate))}>Log out</button>
          </>
        ) : (
          <>
            <button onClick={() => navigate("/register")}>Sign up</button>/
            <button onClick={() => navigate("/login")}>Log in</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
