import React from "react";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";
import { PiUserCirclePlusThin, PiShoppingBagLight } from "react-icons/pi";
import { GrHomeRounded } from "react-icons/gr";
import { TbMessageCircle2 } from "react-icons/tb";

import { GoPeople, GoShare } from "react-icons/go";
import { MdOutlineForum } from "react-icons/md";
import { SlSettings } from "react-icons/sl";
import { AiOutlineLike } from "react-icons/ai";
import { BiCommentEdit } from "react-icons/bi";
import Accept from "../../components/AcceptButtons/Accept";
import Decline from "../../components/AcceptButtons/Decline";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="container-home">
      <div className="side-item-menu">
        <div className="item-profile">
          <PiUserCirclePlusThin />
          <div className="profile-btn">
            <p onClick={() => navigate("/register")}>Sign up</p> /
            <p onClick={() => navigate("/login")}>Log in</p>
          </div>
        </div>
        <div className="item-menu">
          <div className="menu">
            <GrHomeRounded /> <p onClick={() => navigate("/")}>Home</p>
          </div>
          <div className="menu">
            <TbMessageCircle2 /> Messages
          </div>
          <div className="menu">
            <GoPeople />
            People
          </div>
          <div className="menu">
            <MdOutlineForum /> <p onClick={() => navigate("/forum")}>Forum</p>
          </div>
          <div className="menu">
            <PiShoppingBagLight /> Shop
          </div>
          <div className="menu">
            <SlSettings /> Settings
          </div>
        </div>
      </div>
      <div className="main-content">
        <div className="block-stories">
          <div className="story">story</div>
          <div className="story">story</div>
          <div className="story">story</div>
          <div className="story">story</div>
        </div>
        <div className="block-news">
          <div className="new">
            <div className="new-title">
              <PiUserCirclePlusThin />
              <div className="title-text">
                <h4>Makers</h4>
                <p>dd/mm/yy</p>
              </div>
            </div>
            <div className="new-img">
              <img
                src="https://dr.savee-cdn.com/things/6/4/825c75a8fb6d03054c63aa.webp"
                alt="error-img"
              />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              consequatur distinctio suscipit inventore, possimus repudiandae
              vero aspernatur illum beatae doloremque et reiciendis laborum
              recusandae. Expedita repellat in neque sunt aliquid tempore magnam
              alias quod labore. Non, iste sunt? Tempora facere, exercitationem
              aliquid cum dolor hic nam aliquam esse blanditiis harum.
            </p>
            <div className="new-btns">
              <AiOutlineLike />
              <BiCommentEdit />
              <GoShare />
            </div>
          </div>
        </div>
      </div>
      <div className="menu-contacts">
        <div className="block-request">
          <p>Requests</p>
          <div className="request">
            <div className="request-text">
              <PiUserCirclePlusThin />
              <p>
                <strong>Nurbol</strong> wants to add you to friends
              </p>
            </div>
            <div className="request-btns">
              <Accept />
              <Decline />
            </div>
          </div>
          <div className="request">request</div>
        </div>
        <br />
        <div className="block-contacts">
          <p>Contacts</p>
          <div className="contacts">user user</div>
          <div className="contacts">user user</div>
          <div className="contacts">user user</div>
          <div className="contacts">user user</div>
          <div className="contacts">user user</div>
          <div className="contacts">user user</div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
