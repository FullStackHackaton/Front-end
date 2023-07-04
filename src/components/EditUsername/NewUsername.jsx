import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { saveNewUsername } from "../../store/auth/authActions";
import Navbar from "../Navbar/Navbar";

const NewUsername = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const [empty, setEmpty] = useState(false);

  const [username, setUsername] = useState("");

  const searchParams = new URLSearchParams(location.search);
  const uid = searchParams.get("uid");
  const token = searchParams.get("token");

  const sendEmailforResetPass = () => {
    if (!username.trim()) {
      setEmpty(true);
      return;
    }

    let formData = new FormData();
    formData.append("uid", uid);
    formData.append("token", token);
    formData.append("new_username", username);
    dispatch(saveNewUsername({ formData, navigate }));

    // for (let pair of formData.entries()) {
    //   console.log(pair[0] + ": " + pair[1]);
    // }

    const data = JSON.parse(localStorage.getItem("username"));

    if (data) {
      const updatedData = JSON.stringify(username);
      localStorage.setItem("username", updatedData);
    }
  };
  return (
    <>
      <Navbar />
      <div className="box-register">
        <div className="logo-box">
          <img
            src={process.env.PUBLIC_URL + "/logo.svg"}
            alt="error-logo"
            className="logo-login"
            onClick={() => navigate("/")}
          />
          <p>New Username</p>
        </div>

        <div className="register-inputs">
          <input
            type="text"
            placeholder="New Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {empty && <p>Enter inputs</p>}
        </div>
        <div className="register-btn">
          <button onClick={sendEmailforResetPass}>Save</button>
        </div>
      </div>
    </>
  );
};

export default NewUsername;
