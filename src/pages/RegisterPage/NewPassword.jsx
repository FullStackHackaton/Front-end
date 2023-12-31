import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { sendNewPassword } from "../../store/auth/authActions";

const NewPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const [empty, setEmpty] = useState(false);

  const [newPassword, setNewPassword] = useState("");

  const searchParams = new URLSearchParams(location.search);
  const uid = searchParams.get("uid");
  const token = searchParams.get("token");

  // console.log(uid);
  // console.log(token);

  const sendEmailforResetPass = () => {
    if (!newPassword.trim()) {
      setEmpty(true);
      return;
    }

    let formData = new FormData();
    formData.append("uid", uid);
    formData.append("token", token);
    formData.append("new_password", newPassword);
    dispatch(sendNewPassword({ formData, navigate }));
  };

  return (
    <div className="box-register">
      <div className="logo-box">
        <img
          src={process.env.PUBLIC_URL + "/logo.svg"}
          alt="Logo"
          className="logo-login"
          onClick={() => navigate("/")}
        />
        <p>New Password</p>
      </div>
      <div className="register-inputs">
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        {empty && <p>Enter inputs</p>}
      </div>
      <div className="register-btn">
        <button onClick={sendEmailforResetPass}>Save</button>
      </div>
    </div>
  );
};

export default NewPassword;
