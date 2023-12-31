import React, { useEffect } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { checkAuthToken, logout } from "../../store/auth/authActions";
import { useDispatch } from "react-redux";
import { BiUserCircle } from "react-icons/bi";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) dispatch(checkAuthToken());
  }, []);

  const username = JSON.parse(localStorage.getItem("username"));

  return (
    <nav>
      <div className="logo" onClick={() => navigate("/")}>
        <img src={process.env.PUBLIC_URL + "/logo.svg"} alt="logo-error" />
      </div>
      <div className="nav-item-menu">
        {username ? (
          <>
            <div id="user__iconname">
              <p>{username}</p>
              <BiUserCircle className="user__icon" />
            </div>
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
