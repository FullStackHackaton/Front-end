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

  return (
    <div className="side-item-menu">
      {username ? (
        <></>
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
        <div onClick={() => navigate("/")} className="menu">
          <GrHomeRounded /> <p>Home</p>
        </div>
        <div onClick={() => navigate("/chat")} className="menu">
          <TbMessageCircle2 /> <p>Message</p>
        </div>
        <div onClick={() => navigate("/people")} className="menu">
          <GoPeople /> <p>People</p>
        </div>
        <div onClick={() => navigate("/forum")} className="menu">
          <MdOutlineForum /> <p>Forum</p>
        </div>
        <div onClick={() => navigate("/shop")} className="menu">
          <PiShoppingBagLight /> <p>Shop</p>
        </div>
        <div onClick={() => navigate("/settings")} className="menu">
          <SlSettings /> <p> Settings</p>
        </div>
      </div>
    </div>
  );
};

export default SideBarMenu;
