import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { setNewUsername } from "../../store/auth/authActions";

const SetUsername = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [empty, setEmpty] = useState(false);
  //   const [sent, setSent] = useState(false);

  const [password, setPassword] = useState("");
  const [newuser, setNewUser] = useState("");

  const sendEmailforResetPass = () => {
    if (!password.trim() || !newuser.trim()) {
      setEmpty(true);
      return;
    }

    // setSent(true);
    let formData = new FormData();
    formData.append("current_password", password);
    formData.append("new_username", newuser);

    console.log("FormData content:");
    for (let pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }
    dispatch(setNewUsername(formData));

    const data = JSON.parse(localStorage.getItem("username"));

    if (data) {
      const updatedData = JSON.stringify(newuser);
      localStorage.setItem("username", updatedData);
    }
    navigate("/settings");
  };
  return (
    <>
      <Navbar />
      <div className="box-register">
        <div className="logo-box">
          <img
            src={process.env.PUBLIC_URL + "/logo.svg"}
            alt="Logo"
            className="logo-login"
            onClick={() => navigate("/")}
          />
          <p>Change Username</p>
        </div>
        {/* {sent ? (
          <div style={{ width: "20%", textAlign: "center" }}>
            <h4>
              На вашу почту отправили ссылку для изменении username, перейдите
              по ней для изменении
            </h4>
          </div>
        ) : (
          <> */}
        <div className="register-inputs">
          <input
            type="password"
            placeholder="Current Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="text"
            placeholder="New Username"
            value={newuser}
            onChange={(e) => setNewUser(e.target.value)}
          />
          {empty && <p>Enter inputs</p>}
        </div>
        <div className="register-btn">
          <button onClick={sendEmailforResetPass}>Save</button>
        </div>
        {/* </>
        )} */}
      </div>
    </>
  );
};

export default SetUsername;
