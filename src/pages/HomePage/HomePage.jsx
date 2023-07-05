import React, { useEffect } from "react";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";
import { PiUserCirclePlusThin } from "react-icons/pi";
import { GoShare } from "react-icons/go";
import { AiOutlineLike } from "react-icons/ai";
import { BiCommentEdit } from "react-icons/bi";
import Accept from "../../components/AcceptButtons/Accept";
import Decline from "../../components/AcceptButtons/Decline";
import SideBarMenu from "../../components/SideBarMenu/SideBarMenu";
import Navbar from "../../components/Navbar/Navbar";
import { checkAuthToken, getMyProfile } from "../../store/auth/authActions";
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "../../store/topic/topicsActions";

const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) dispatch(checkAuthToken());
  }, []);

  useEffect(() => {
    dispatch(getMyProfile());
  }, []);

  useEffect(() => {
    dispatch(getEvents());
  }, []);

  const news = useSelector((state) => state.articles.news);

  const username = JSON.parse(localStorage.getItem("username"));
  const currentDate = new Date();
  const formattedDate = currentDate.toDateString();

  return (
    <div>
      <Navbar />
      <div className="container-home">
        <SideBarMenu />
        <div className="main-content">
          <div className="news-title">
            <h2>News</h2>
          </div>
          <div className="block-news">
            {news &&
              news.map((item, index) => (
                <div className="new" key={index}>
                  <div className="new-title">
                    <PiUserCirclePlusThin />
                    <div className="title-text">
                      <h4>Makers</h4>
                      <p>{formattedDate}</p>
                    </div>
                  </div>
                  <div className="new-descr">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
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
            {/* <div className="request">request</div> */}
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
    </div>
  );
};

export default HomePage;
