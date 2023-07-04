import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import SideBarMenu from "../../components/SideBarMenu/SideBarMenu";
import "./settingspage.css";
import { useNavigate } from "react-router-dom";
import { getMyProfile, updateProfile } from "../../store/auth/authActions";
import { useDispatch, useSelector } from "react-redux";

const SettingsPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const myprofile = useSelector((state) => state.auth.myprofile);
  const slug = myprofile.slug;
  const [openEditForm, setOpenEditForm] = useState(false);
  const [empty, setEmpty] = useState(false);

  const [data, setData] = useState({
    name: "",
    last_name: "",
    short_description: "",
    gender: "",
    role: "",
    birth_date: "",
    image: "",
  });

  useEffect(() => {
    dispatch(getMyProfile());
  }, []);

  function handleOpenEditForm() {
    setOpenEditForm(true);
  }

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setData({
        ...data,
        [e.target.name]: e.target.files[0],
      });
    } else {
      setData({
        ...data,
        [e.target.name]: e.target.value,
      });
    }
  };

  function handleSaveChanges() {
    if (!data) {
      setEmpty(true);
      return;
    }
    setOpenEditForm(false);

    let formData = new FormData();
    formData.append("name", data.name);
    formData.append("last_name", data.last_name);
    formData.append("short_description", data.short_description);
    formData.append("gender", data.gender);
    formData.append("role", data.role);
    formData.append("birth_date", data.birth_date);
    formData.append("image", data.image);

    // console.log("FormData content:");
    // for (let pair of formData.entries()) {
    //   console.log(pair[0], pair[1]);
    // }
    // dispatch(updateProfile({ formData, slug }));
    dispatch(updateProfile({ formData, slug })).then(() => {
      dispatch(getMyProfile());
    });
  }

  return (
    <>
      <Navbar />
      <div className="container-home">
        <SideBarMenu />
        <div className="main-settings">
          <div className="settings-title">
            <h2>Account settings</h2>
          </div>
          <div className="right-settings">
            <div className="settings-menu">
              <button>Profile Settings</button>
              <button onClick={() => navigate("/setusername")}>
                Edit Username
              </button>
              <button onClick={() => navigate("/setpassword")}>
                Edit Password
              </button>
              <button onClick={() => navigate("/deleteaccount")}>
                Delete Account
              </button>
            </div>
            <div className="setting-content-profile">
              <div className="profile-back-img">
                <div className="profile-ava-img">
                  <img
                    src="https://dr.savee-cdn.com/things/6/4/7f71faebf1a3eae69ed14c.webp"
                    alt="ava-error"
                  />
                </div>
                <div className="profile-ava-btns">
                  <button>Upload New</button>
                  <button>Delete Avatar</button>
                </div>
              </div>

              {openEditForm ? (
                <div className="setting-profile-data">
                  <div className="first-data">
                    <div className="left-data">
                      <input
                        type="text"
                        placeholder="First Name"
                        name="name"
                        value={data.name}
                        onChange={handleChange}
                      />
                      <select
                        value={data.role}
                        name="role"
                        onChange={handleChange}
                      >
                        <option value="">Выберите роль</option>
                        <option value="student">Студент</option>
                        <option value="mentor">Ментор</option>
                        <option value="curator">Куратор</option>
                      </select>
                      <select
                        value={data.gender}
                        name="gender"
                        onChange={handleChange}
                      >
                        <option value="">Выберите пол</option>
                        <option value="man">Мужчина</option>
                        <option value="woman">Женщина</option>
                      </select>
                    </div>

                    <div className="right-data">
                      <input
                        type="text"
                        placeholder="Last Name"
                        name="last_name"
                        value={data.last_name}
                        onChange={handleChange}
                      />
                      <input
                        type="date"
                        placeholder="Birth Date"
                        value={data.birth_date}
                        name="birth_date"
                        onChange={handleChange}
                      />
                      <input
                        type="file"
                        placeholder="Image"
                        name="image"
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="edit-last-data">
                    <textarea
                      placeholder="Short Description"
                      value={data.short_description}
                      name="short_description"
                      onChange={handleChange}
                    />
                  </div>
                  {empty && <p>Enter all inputs</p>}

                  <div className="data-save-btn">
                    <button onClick={handleSaveChanges}>Save Changes</button>
                  </div>
                </div>
              ) : (
                <div className="setting-profile-data">
                  <div className="first-data">
                    <div className="left-data">
                      <p>Name</p>
                      <div className="data-me">
                        {myprofile.name ? (
                          myprofile.name
                        ) : (
                          <p>Напишите свое имя</p>
                        )}
                      </div>
                      <p>Username</p>
                      <div className="data-me">
                        {myprofile.user ? (
                          myprofile.user
                        ) : (
                          <p>Напишите username</p>
                        )}
                      </div>
                      <p>Gender</p>
                      <div className="data-me">
                        {myprofile.gender ? (
                          myprofile.gender
                        ) : (
                          <p>Укажите свой пол</p>
                        )}
                      </div>
                    </div>

                    <div className="right-data">
                      <p>LastName</p>
                      <div className="data-me">
                        {myprofile.last_name ? (
                          myprofile.last_name
                        ) : (
                          <p>Напишите свою фамилию</p>
                        )}
                      </div>
                      <p>Birth Date</p>
                      <div className="data-me">
                        {myprofile.birth_date ? (
                          myprofile.birth_date
                        ) : (
                          <p>Укажите ваш год рождения</p>
                        )}
                      </div>
                      <p>Role</p>
                      <div className="data-me">
                        {myprofile.role ? (
                          myprofile.role
                        ) : (
                          <p>Напишите свой роль</p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="last-data">
                    <p>Description</p>
                    <div className="data-descr-me">
                      {myprofile.short_description ? (
                        myprofile.short_description
                      ) : (
                        <p>Напишите описание</p>
                      )}
                    </div>
                  </div>

                  <div className="data-edit-btn">
                    <button onClick={handleOpenEditForm}>Edit Profile</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsPage;
