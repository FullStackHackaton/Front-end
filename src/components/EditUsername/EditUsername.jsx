import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkAuthToken, sendEmailforUser } from "../../store/auth/authActions";
import Navbar from "../Navbar/Navbar";

const EditUsername = () => {
  useEffect(() => {
    if (localStorage.getItem("token")) dispatch(checkAuthToken());
  }, []);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [empty, setEmpty] = useState(false);
  const [sent, setSent] = useState(false);

  const [email, setEmail] = useState("");

  const sendEmailforResetPass = () => {
    if (!email.trim()) {
      setEmpty(true);
      return;
    }

    setSent(true);
    let formData = new FormData();
    formData.append("email", email);
    dispatch(sendEmailforUser(formData));
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
          <p>Edit Username</p>
        </div>
        {sent ? (
          <div style={{ width: "20%", textAlign: "center" }}>
            <h4>
              На вашу почту отправили ссылку для изменении username, перейдите
              по ней для изменении
            </h4>
          </div>
        ) : (
          <>
            <div className="register-inputs">
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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

export default EditUsername;
