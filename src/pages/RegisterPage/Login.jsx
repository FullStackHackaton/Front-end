import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="box-register">
      <div className="logo-box">
        <img
          src={process.env.PUBLIC_URL + "/logo.svg"}
          alt="Logo"
          className="logo-login"
          onClick={() => navigate("/")}
        />
        <p>Welcome back</p>
      </div>
      <div className="register-inputs">
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
      </div>
      <div className="register-btn">
        <button>LOG IN</button>
      </div>
      <div className="register-way">
        <p
          onClick={() => {
            navigate("/register");
          }}
        >
          If you don't have account, then click registration
        </p>
      </div>
    </div>
  );
};

export default Login;
