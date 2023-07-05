import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../store/auth/authActions";
import Navbar from "../../components/Navbar/Navbar";
import { setError } from "../../store/auth/authSlice";

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

  useEffect(() => {
    dispatch(setError());
  }, []);

  const error = useSelector((state) => state.auth.error);
  console.log(error);

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
          {error && <p>{error.detail}</p>}
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
              navigate("/editusername");
            }}
          >
            Forgot username?
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
