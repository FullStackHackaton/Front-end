import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { activation } from "../../store/auth/authActions";

const Activation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const formData = new FormData();

  for (let [key, value] of searchParams.entries()) {
    formData.append(key, value);
  }

  useEffect(() => {
    dispatch(activation(formData));
  }, []);

  return (
    <div className="box-register">
      <div className="logo-box">
        <img
          src={process.env.PUBLIC_URL + "/logo.svg"}
          alt="Logo"
          className="logo-login"
          onClick={() => navigate("/")}
        />
        <p>Activated</p>
      </div>
      <div className="register-btn" style={{ width: "50%" }}>
        <button onClick={() => navigate("/login")}>LOG IN</button>
      </div>
    </div>
  );
};

export default Activation;
