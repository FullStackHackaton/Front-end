import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import SideBarMenu from "../../components/SideBarMenu/SideBarMenu";
import "./postdetails.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import {
  getAllComments,
  getOneComment,
  getOnePost,
  leaveComment,
} from "../../store/topic/topicsActions";
import { API } from "../../consts";
import { PiUserCirclePlusThin } from "react-icons/pi";
import { checkAuthToken } from "../../store/auth/authActions";

const PostDetails = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("token")) dispatch(checkAuthToken());
  }, []);

  const navigate = useNavigate();
  const params = useParams();
  const slug = params.slug;

  const onepost = useSelector((state) => state.articles.onepost);

  useEffect(() => {
    dispatch(getAllComments());
  }, []);

  const [comment, setComment] = useState("");

  useEffect(() => {
    dispatch(getOnePost(slug));
  }, [slug]);

  function handleSendComm() {
    if (!comment.trim()) {
      alert("enter input");
      return;
    }

    let formData = new FormData();
    formData.append("article", slug);
    formData.append("text", comment);

    dispatch(leaveComment(formData))
      .then(() => {
        dispatch(getOnePost(slug));
        setComment("");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <Navbar />
      <div className="compo-people">
        <SideBarMenu />
        <div className="main-post-details">
          <div className="post-title">
            <h2>Post Details</h2>
          </div>

          <div className="post-details">
            <div className="new-title">
              <PiUserCirclePlusThin />
              <div className="title-text">
                <h4>{onepost?.user}</h4>
                <p>{onepost?.created_at}</p>
              </div>
            </div>
            <div className="new-descr">
              <h3>{onepost?.title}</h3>
              <p>{onepost?.text}</p>
              <p>#{onepost?.tag}</p>
              {onepost && onepost.images && onepost.images[0] ? (
                <img src={API + onepost.images[0]?.image} alt="no image" />
              ) : (
                <></>
              )}
            </div>
            <div className="post-btns">
              <button>Like</button>
            </div>
          </div>
          <div className="block-comments">
            {onepost.comments ? (
              onepost.comments.map((com, index) => (
                <div className="onecomment" key={index}>
                  <div className="new-title-com">
                    <PiUserCirclePlusThin />
                    <div className="title-text">
                      <h4>{com.user}</h4>
                      <p>{com.created_at}</p>
                    </div>
                  </div>
                  <div className="com-text">
                    <p>{com.text}</p>
                  </div>
                </div>
              ))
            ) : (
              <></>
            )}
          </div>
          <div className="list-comment">
            <div className="formBlock">
              <div className="formBlock">
                <textarea
                  placeholder="Leave a comment"
                  cols={50}
                  rows={5}
                  value={comment} // Привязываем значение текстового поля к состоянию comment
                  onChange={(e) => setComment(e.target.value)}
                />
                <button onClick={handleSendComm}>Add Comment</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostDetails;
