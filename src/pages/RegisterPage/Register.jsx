import React, { useState } from "react";
import "./register.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../store/auth/authActions";
import Navbar from "../../components/Navbar/Navbar";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [empty, setEmpty] = useState(false);
  const [sent, setSent] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const error = useSelector((state) => state.auth.error);
  console.log(error);

  const handleJoin = () => {
    if (!username.trim() || !email.trim() || !password.trim()) {
      setEmpty(true);
      return;
    }

    let formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);

    setSent(true);

    dispatch(register({ formData, navigate }));
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
          <p>Let's do it</p>
        </div>
        {!sent && (
          <>
            <div className="register-inputs">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              {/* <input type="text" placeholder="Name" /> */}
              {/* <input type="text" placeholder="Surname" /> */}
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
              <button onClick={handleJoin}>JOIN</button>
            </div>
          </>
        )}
        {sent && <h3>Подтвердите вашу почту и войдите</h3>}
      </div>
    </div>
  );
};

export default Register;
