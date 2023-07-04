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

const SideBarMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const username = JSON.parse(localStorage.getItem("username"));
  const myprofile = useSelector((state) => state.auth.myprofile);

  return (
    <div className="side-item-menu">
      {username ? (
        <>
          <div className="item-profile" onClick={() => navigate("/profile")}>
            <PiUserCirclePlusThin />
            <div className="profile-btn">
              {myprofile.name ? (
                <p>
                  {myprofile.name} {myprofile.last_name}
                </p>
              ) : (
                <p>username</p>
              )}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="item-profile">
            <PiUserCirclePlusThin />
            <div className="profile-btn">
              <p onClick={() => navigate("/register")}>Sign up</p> /
              <p onClick={() => navigate("/login")}>Log in</p>
            </div>
          </div>
        </>
      )}

      <div className="item-menu">
        <div className="menu">
          <GrHomeRounded /> <p onClick={() => navigate("/")}>Home</p>
        </div>
        <div className="menu">
          <TbMessageCircle2 /> Messages
        </div>
        <div className="menu" onClick={() => navigate("/people")}>
          <GoPeople />
          People
        </div>
        <div className="menu">
          <MdOutlineForum /> <p onClick={() => navigate("/forum")}>Forum</p>
        </div>
        <div onClick={() => navigate("/shop")} className="menu">
          <PiShoppingBagLight /> Shop
        </div>
        <div className="menu" onClick={() => navigate("/settings")}>
          <SlSettings /> Settings
        </div>
      </div>
    </div>
  );
};

export default SideBarMenu;
