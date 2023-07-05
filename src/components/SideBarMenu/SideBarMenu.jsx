import React, { useEffect } from "react";
import "./sidebarmenu.css";
import { useNavigate } from "react-router-dom";
import { PiUserCirclePlusThin, PiShoppingBagLight } from "react-icons/pi";
import { GrHomeRounded } from "react-icons/gr";
import { TbMessageCircle2 } from "react-icons/tb";
import { GoPeople } from "react-icons/go";
import { MdOutlineForum } from "react-icons/md";
import { SlSettings } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { checkAuthToken, getMyProfile } from "../../store/auth/authActions";
import { API } from "../../consts";

const SideBarMenu = () => {
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
    <div className="side-item-menu">
      {username ? (
        <>
          <div className="item-profile" onClick={() => navigate("/profile")}>
            {myprofile.images && myprofile.images[0] ? (
              <img src={API + myprofile.images[0]?.image} alt="error" />
            ) : (
              <div className="no-profile">
                <PiUserCirclePlusThin />
              </div>
            )}
            <div className="profile-btn">
              {myprofile.name ? (
                <p>
                  {myprofile.name} {myprofile.last_name}
                </p>
              ) : (
                <p>{username}</p>
              )}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="no-profile">
            <PiUserCirclePlusThin />
            <div className="profile-btn">
              <p onClick={() => navigate("/register")}>Sign up</p> /
              <p onClick={() => navigate("/login")}>Log in</p>
            </div>
          </div>
        </>
      )}

      <div className="item-menu">
        <div className="menu" onClick={() => navigate("/")}>
          <GrHomeRounded /> <p>Home</p>
        </div>
        <div className="menu">
          <TbMessageCircle2 /> Messages
        </div>
        {username ? (
          <div className="menu" onClick={() => navigate("/people")}>
            <GoPeople />
            People
          </div>
        ) : (
          <div className="menu" onClick={() => navigate("/register")}>
            <GoPeople />
            People
          </div>
        )}
        <div className="menu" onClick={() => navigate("/forum")}>
          <MdOutlineForum /> <p>Forum</p>
        </div>
        {username ? (
          <div onClick={() => navigate("/shop")} className="menu">
            <PiShoppingBagLight /> Shop
          </div>
        ) : (
          <div onClick={() => navigate("/register")} className="menu">
            <PiShoppingBagLight /> Shop
          </div>
        )}
        {username ? (
          <div className="menu" onClick={() => navigate("/settings")}>
            <SlSettings /> Settings
          </div>
        ) : (
          <div className="menu" onClick={() => navigate("/register")}>
            <SlSettings /> Settings
          </div>
        )}
      </div>
    </div>
  );
};

export default SideBarMenu;
