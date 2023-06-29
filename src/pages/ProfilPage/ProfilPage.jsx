import React from "react";
import "./ProfilPage.css";
import { useNavigate } from "react-router-dom";
import SideBarMenu from "../../components/SideBarMenu/SideBarMenu";

const ProfilPage = () => {
  const navigate = useNavigate();
  return (
    <div className="container-home">
      <SideBarMenu />
      <div className="main-content-profile">
        <div className="profile-back-img">
          <img
            src="https://dr.savee-cdn.com/things/thumbnails/6/4/877aa318a58514ac7e9886.webp"
            alt="error-img"
          />
          <div className="profile-ava-img">
            <img
              src="https://dr.savee-cdn.com/things/6/4/7f71faebf1a3eae69ed14c.webp"
              alt="ava-error"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilPage;
