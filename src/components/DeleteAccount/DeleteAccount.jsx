import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteAccount } from "../../store/auth/authActions";
import Navbar from "../Navbar/Navbar";

const DeleteAccount = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [empty, setEmpty] = useState(false);

  const [currentpassword, setCurrentPassword] = useState("");

  const handleDeleteAcc = () => {
    if (!currentpassword.trim()) {
      setEmpty(true);
      return;
    }

    let formData = new FormData();
    formData.append("current_password", currentpassword);

    dispatch(deleteAccount(formData));

    navigate("/");
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
          <p>Delete Account</p>
        </div>
        <div className="register-inputs">
          <input
            type="password"
            placeholder="Current Password"
            value={currentpassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
          {empty && <p>Enter inputs</p>}
        </div>
        <div className="register-btn">
          <button onClick={handleDeleteAcc}>Delete</button>
        </div>
      </div>
    </>
  );
};

export default DeleteAccount;
