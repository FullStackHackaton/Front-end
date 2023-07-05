import React, { useEffect, useState } from "react";
import "./people.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import SerachPeople from "../../components/SearchPeople/SerachPeople";
import SideBarMenu from "../../components/SideBarMenu/SideBarMenu";
import { useDispatch, useSelector } from "react-redux";
import { getUsersProfiles } from "../../store/auth/authActions";

const People = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [selectedOption, setSelectedOption] = useState("Students");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  useEffect(() => {
    dispatch(getUsersProfiles());
  }, []);

  const usersprofiles = useSelector((state) => state.auth.usersprofiles);
  console.log(usersprofiles);

  return (
    <>
      <Navbar />
      <div className="compo-people">
        <SideBarMenu />
        <div className="list-people">
          <div className="list-search">
            <div className="search-input">
              <SerachPeople />
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
            {usersprofiles.map((profile, index) => (
              <div className="people-card" key={index}>
                <div className="people-image"></div>
                <div className="data">
                  <p>{profile.user}</p>
                </div>
                <div className="people-btns">
                  <button
                    onClick={() => navigate(`/profileusers/${profile.slug}`)}
                  >
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default People;
