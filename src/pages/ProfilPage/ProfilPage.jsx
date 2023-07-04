import React, { useEffect } from "react";
import "./ProfilPage.css";
import { useNavigate } from "react-router-dom";
import SideBarMenu from "../../components/SideBarMenu/SideBarMenu";
import { getMyProfile } from "../../store/auth/authActions";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Navbar/Navbar";

const ProfilPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const username = JSON.parse(localStorage.getItem("username"));
  const myprofile = useSelector((state) => state.auth.myprofile);

  useEffect(() => {
    dispatch(getMyProfile());
  }, []);

  return (
    <>
      <Navbar />
      <div className="container-home">
        <SideBarMenu />
        <div className="main-content-profile">
          <div className="profile-back-img">
            <div className="profile-ava-img">
              <img
                src="https://dr.savee-cdn.com/things/6/4/7f71faebf1a3eae69ed14c.webp"
                alt="ava-error"
              />
            </div>
          </div>

          <div className="profile-data">
            <div className="first-data">
              <div className="left-data">
                <p>Name</p>
                <div className="data-me">{myprofile.name}</div>
                <p>Username</p>
                <div className="data-me">{myprofile.user}</div>
                <p>Gender</p>
                <div className="data-me">{myprofile.gender}</div>
              </div>

              <div className="right-data">
                <p>LastName</p>
                <div className="data-me">{myprofile.last_name}</div>
                <p>Birth Date</p>
                <div className="data-me">{myprofile.birth_date}</div>
                <p>Role</p>
                <div className="data-me">{myprofile.role}</div>
              </div>
            </div>

            <div className="profile-last-data">
              <p>Description</p>
              <div className="data-descr-me">{myprofile.short_description}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilPage;
