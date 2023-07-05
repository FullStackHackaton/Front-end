import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { getOneUser } from "../../store/auth/authActions";
import Navbar from "../../components/Navbar/Navbar";
import SideBarMenu from "../../components/SideBarMenu/SideBarMenu";
import { API } from "../../consts";
import { PiUserCirclePlusThin } from "react-icons/pi";

const ProfileUsers = () => {
  const dispatch = useDispatch();
  const searParams = useParams();

  useEffect(() => {
    dispatch(getOneUser(searParams));
  }, [searParams]);
  console.log(searParams);
  const userprofile = useSelector((state) => state.auth.userprofile);
  console.log(userprofile);

  return (
    <>
      <Navbar />
      <div className="container-home">
        <SideBarMenu />
        <div className="main-content-profile">
          <div className="profile-back-img">
            <div className="profile-ava-img">
              {userprofile.images ? (
                <PiUserCirclePlusThin />
              ) : (
                <img src={API + userprofile.images[0]?.image} alt="ava-error" />
              )}
            </div>
          </div>

          <div className="profile-data">
            <div className="first-data">
              {userprofile.name ? (
                <>
                  <p>Username</p>
                  <div className="data-me">{userprofile.user}</div>
                </>
              ) : (
                <></>
              )}
              <div className="left-data">
                <p>Name</p>
                <div className="data-me">{userprofile.name}</div>
                <p>Username</p>
                <div className="data-me">{userprofile.user}</div>
                <p>Gender</p>
                <div className="data-me">{userprofile.gender}</div>
              </div>

              <div className="right-data">
                <p>LastName</p>
                <div className="data-me">{userprofile.last_name}</div>
                <p>Birth Date</p>
                <div className="data-me">{userprofile.birth_date}</div>
                <p>Role</p>
                <div className="data-me">{userprofile.role}</div>
              </div>
            </div>

            <div className="profile-last-data">
              <p>Description</p>
              <div className="data-descr-me">
                {userprofile.short_description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileUsers;
