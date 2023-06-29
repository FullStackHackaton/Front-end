import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../store/auth/authActions";
import Navbar from "../../components/Navbar/Navbar";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [empty, setEmpty] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!username.trim() || !password.trim()) {
      setEmpty(true);
      return;
    }

    let formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);

    dispatch(login({ formData, navigate, username }));
  };

  return (
    <div>
      <Navbar />
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
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {empty && <p>Enter all inputs</p>}
        </div>
        <div className="register-btn">
          <button onClick={handleLogin}>LOG IN</button>
        </div>
        <div className="register-way">
          <p
            onClick={() => {
              navigate("/password");
            }}
          >
            Forgot password?
          </p>
          <p
            onClick={() => {
              navigate("/register");
            }}
          >
            Don't have an account? Sign Up
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
