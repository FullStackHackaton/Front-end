import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { sendEmail } from "../../store/auth/authActions";
import Navbar from "../../components/Navbar/Navbar";

const ResetPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [empty, setEmpty] = useState(false);
  const [sent, setSent] = useState(false);

  const [resetEmail, setResetEmail] = useState("");

  const sendEmailforResetPass = () => {
    if (!resetEmail.trim()) {
      setEmpty(true);
      return;
    }

    setSent(true);
    let formData = new FormData();
    formData.append("email", resetEmail);
    dispatch(sendEmail(formData));
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
          <p>Reset Password</p>
        </div>
        {sent ? (
          <div style={{ width: "20%", textAlign: "center" }}>
            <h4>
              На вашу почту отправили ссылку для сброса пароля, перейдите по ней
              для сброса
            </h4>
          </div>
        ) : (
          <>
            <div className="register-inputs">
              <input
                type="text"
                placeholder="Email"
                value={resetEmail}
                onChange={(e) => setResetEmail(e.target.value)}
              />
              {empty && <p>Enter inputs</p>}
            </div>
            <div className="register-btn">
              <button onClick={sendEmailforResetPass}>Send</button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ResetPassword;
