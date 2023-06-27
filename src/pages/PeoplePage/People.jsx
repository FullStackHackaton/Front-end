import React, { useState } from "react";
import "./people.css";
import { PiUserCirclePlusThin, PiShoppingBagLight } from "react-icons/pi";
import { GrHomeRounded } from "react-icons/gr";
import { TbMessageCircle2 } from "react-icons/tb";
import { GoPeople } from "react-icons/go";
import { MdOutlineForum } from "react-icons/md";
import { SlSettings } from "react-icons/sl";
import { GoSearch } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const People = () => {
  const navigate = useNavigate();

  const [selectedOption, setSelectedOption] = useState("Students");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="compo-people">
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
            <GrHomeRounded /> Home
          </div>
          <div className="menu">
            <TbMessageCircle2 /> Messages
          </div>
          <div className="menu">
            <GoPeople />
            People
          </div>
          <div className="menu">
            <MdOutlineForum /> Forum
          </div>
          <div className="menu">
            <PiShoppingBagLight /> Shop
          </div>
          <div className="menu">
            <SlSettings /> Settings
          </div>
        </div>
      </div>

      <div className="list-people">
        <div className="list-search">
          <div className="search-input">
            <GoSearch />
            <input type="text" placeholder="Search" />
          </div>
          <div className="option-search">
            <div className="radio-inputs">
              <label className="radio">
                <input
                  type="radio"
                  name="radio"
                  value="Students"
                  checked={selectedOption === "Students"}
                  onChange={handleOptionChange}
                />
                <span className="name">Students</span>
              </label>
              <label className="radio">
                <input
                  type="radio"
                  name="radio"
                  value="Mentors"
                  checked={selectedOption === "Mentors"}
                  onChange={handleOptionChange}
                />
                <span className="name">Mentors</span>
              </label>

              <label className="radio">
                <input
                  type="radio"
                  name="radio"
                  value="Curators"
                  checked={selectedOption === "Curators"}
                  onChange={handleOptionChange}
                />
                <span className="name">Curators</span>
              </label>
            </div>
          </div>
        </div>

        <div className="list-people-cards">
          <div className="people-card">
            <div className="image"></div>
            <div className="data">
              <p>username</p>
            </div>
            <div className="people-btns">
              <button>Message</button>
            </div>
          </div>
          <div className="people-card">
            <div className="image"></div>
            <div className="data">
              <p>username</p>
            </div>
            <div className="people-btns">
              <button>Message</button>
            </div>
          </div>
          <div className="people-card">
            <div className="image"></div>
            <div className="data">
              <p>username</p>
            </div>
            <div className="people-btns">
              <button>Message</button>
            </div>
          </div>
          <div className="people-card">
            <div className="image"></div>
            <div className="data">
              <p>username</p>
            </div>
            <div className="people-btns">
              <button>Message</button>
            </div>
          </div>
          <div className="people-card">
            <div className="image"></div>
            <div className="data">
              <p>username</p>
            </div>
            <div className="people-btns">
              <button>Message</button>
            </div>
          </div>
          <div className="people-card">
            <div className="image"></div>
            <div className="data">
              <p>username</p>
            </div>
            <div className="people-btns">
              <button>Message</button>
            </div>
          </div>
          <div className="people-card">
            <div className="image"></div>
            <div className="data">
              <p>username</p>
            </div>
            <div className="people-btns">
              <button>Message</button>
            </div>
          </div>
          <div className="people-card">
            <div className="image"></div>
            <div className="data">
              <p>username</p>
            </div>
            <div className="people-btns">
              <button>Message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default People;
