import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import SideBarMenu from "../../components/SideBarMenu/SideBarMenu";
import "./postdetails.css";
import { useDispatch } from "react-redux";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

const PostDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchParams = useSearchParams();
  console.log(searchParams);
  return (
    <>
      <Navbar />
      <div className="compo-people">
        <SideBarMenu />
        <div className="main-post-details">
          <div className="post-title">
            <h4>Post Details</h4>
          </div>

          {/* <div className="main-content-frm" key={index}>
            <div className="new-title">
              <PiUserCirclePlusThin />
              <div className="title-text">
                <h4>{username}</h4>
                <p>{formattedDate}</p>
              </div>
            </div>
            <div className="new-descr">
              <h3>{post.title}</h3>
              <p>{post.text}</p>
              <p>{post.tag}</p>
              <img src={API + post.images[0]?.image} alt="no image" />
            </div>
            <div className="post-btns">
              <button>Like</button>
              <button onClick={() => navigate(`/postdetails/${post.slug}`)}>
                Comment
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default PostDetails;
