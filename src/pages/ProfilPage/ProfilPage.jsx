import React, { useEffect } from "react";
import "./ProfilPage.css";
import { useNavigate } from "react-router-dom";
import SideBarMenu from "../../components/SideBarMenu/SideBarMenu";
import { checkAuthToken, getMyProfile } from "../../store/auth/authActions";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Navbar/Navbar";
import { API } from "../../consts";

const ProfilPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) dispatch(checkAuthToken());
  }, []);

  useEffect(() => {
    dispatch(getMyProfile());
  }, []);
  const username = JSON.parse(localStorage.getItem("username"));
  const myprofile = useSelector((state) => state.auth.myprofile);

  return (
    <>
      <Navbar />
      <div className="container-home">
        <SideBarMenu />
        <div className="main-content-profile">
          <div className="profile-back-img">
            <div className="profile-ava-img">
              <img src={API + myprofile.images[0]?.image} alt="ava-error" />
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
