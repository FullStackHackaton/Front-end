import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { setNewPassword } from "../../store/auth/authActions";

const SetPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [empty, setEmpty] = useState(false);

  const [currentpassword, setCurrentPassword] = useState("");
  const [newpass, setNewPass] = useState("");

  const handleChangePassword = () => {
    if (!currentpassword.trim() || !newpass.trim()) {
      setEmpty(true);
      return;
    }

    let formData = new FormData();
    formData.append("new_password", newpass);
    formData.append("current_password", currentpassword);

    dispatch(setNewPassword(formData));

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
          <p>Change Password</p>
        </div>
        <div className="register-inputs">
          <input
            type="password"
            placeholder="Current Password"
            value={currentpassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="New Password"
            value={newpass}
            onChange={(e) => setNewPass(e.target.value)}
          />
          {empty && <p>Enter inputs</p>}
        </div>
        <div className="register-btn">
          <button onClick={handleChangePassword}>Save</button>
        </div>
      </div>
    </>
  );
};

export default SetPassword;
