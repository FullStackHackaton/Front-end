import React from "react";
import "./ForumPage.css";
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

const ForumPage = () => {
  const navigate = useNavigate();
  return (
    <div className="container-home-frm">
      <div className="side-item-menu-frm">
        <div className="item-profile-frm">
          <PiUserCirclePlusThin />
          <div className="profile-btn-frm">
            <p onClick={() => navigate("/register")}>Sign up</p> /
            <p onClick={() => navigate("/login")}>Log in</p>
          </div>
        </div>
        <div className="item-menu-frm">
          <div className="menu-frm">
            <GrHomeRounded /> Home
          </div>
          <div className="menu-frm">
            <TbMessageCircle2 /> Messages
          </div>
          <div className="menu-frm">
            <GoPeople />
            People
          </div>
          <div className="menu-frm">
            <MdOutlineForum /> Forum
          </div>
          <div className="menu-frm">
            <PiShoppingBagLight /> Shop
          </div>
          <div className="menu-frm">
            <SlSettings /> Settings
          </div>
        </div>
      </div>
      <div className="main-content-frm">
        <div className="block-news-frm">
          <div className="new-frm">
            <h2>Forum</h2>
            <div className="new-title-frm">
              <PiUserCirclePlusThin />
              <div className="title-text-frm">
                <h4>Mark Zuckerberg</h4>
                <p>27/06/23</p>
              </div>
            </div>
            <p>i sold facebook.</p>
            <div className="new-img-frm">
              <img
                src="https://s3.abcstatics.com/media/tecnologia/2018/03/21/3917767-k9VF--620x349@abc.jpg"
                alt="error-img"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="menu-contacts-frm">
        <div className="block-request-frm">
          <p>Requests</p>
          <div className="request-frm">
            <div className="request-text-frm">
              <PiUserCirclePlusThin />
              <p>
                <strong>Nurbol</strong> wants to add you to friends
              </p>
            </div>
            <div className="request-btns-frm">
              <Accept />
              <Decline />
            </div>
          </div>
          <div className="request-frm">request</div>
        </div>
        <br />
        <div className="block-contacts-frm">
          <p>Contacts</p>
          <div className="contacts-frm">user user</div>
          <div className="contacts-frm">user user</div>
          <div className="contacts-frm">user user</div>
          <div className="contacts-frm">user user</div>
          <div className="contacts-frm">user user</div>
          <div className="contacts-frm">user user</div>
        </div>
      </div>
    </div>
  );
};

export default ForumPage;