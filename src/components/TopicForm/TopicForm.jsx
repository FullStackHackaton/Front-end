import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./TopicForm.css";
import { createTopic } from "../../store/topic/topicsActions";
import { ADMIN } from "../../consts";

const TopicForm = ({ onSubmit }) => {
  const dispatch = useDispatch();

  const username = JSON.parse(localStorage.getItem("username"));

  const [post, setPost] = useState({
    title: "",
    text: "",
    tag: [],
    // type: "",
    image: "",
  });

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setPost({
        ...post,
        [e.target.name]: e.target.files[0],
      });
    } else if (e.target.name === "tag") {
      const tags = e.target.value.split(",");
      setPost({
        ...post,
        [e.target.name]: tags,
      });
    } else {
      setPost({
        ...post,
        [e.target.name]: e.target.value,
      });
    }
  };

  function handleUpload() {
    if (!post.text.trim()) {
      alert("enter input");
      return;
    }

    const topicData = new FormData();
    topicData.append("title", post.title);
    topicData.append("text", post.text);
    topicData.append("tag", post.tag);
    // topicData.append("article_type", post.type);
    topicData.append("image", post.image);

    // for (let [key, value] of topicData) {
    //   console.log([key, value]);
    // }

    dispatch(createTopic(topicData));
    console.log(post);
  }

  return (
    <div className="topic-form-container">
      <div className="form-post">
        <div className="form-title">
          <h3>Create New Post</h3>
        </div>
        <div className="form-inps">
          <div className="form__group field">
            <input
              type="input"
              className="form__field"
              name="title"
              value={post.title}
              onChange={handleChange}
              required=""
            />
            <label htmlFor="title" className="form__label">
              Title
            </label>
          </div>
          <div className="form__group field">
            <input
              type="input"
              className="form__field"
              name="text"
              value={post.text}
              onChange={handleChange}
              required=""
            />
            <label htmlFor="text" className="form__label">
              Text
            </label>
          </div>
          <div className="form__group field">
            <input
              type="input"
              className="form__field"
              name="tag"
              value={post.tag}
              onChange={handleChange}
              required=""
            />
            <label htmlFor="tag" className="form__label">
              Tag
            </label>
          </div>
          <div className="form__group field">
            <input type="file" name="image" onChange={handleChange} />
          </div>
          {ADMIN === username ? (
            <select name="type" value={post.type} onChange={handleChange}>
              <option value="">Choose Type</option>
              <option value="post">Post</option>
              <option value="news">News</option>
            </select>
          ) : (
            <></>
          )}
        </div>
        <div className="form-btn">
          <button onClick={handleUpload}>Create</button>
        </div>
      </div>
    </div>
  );
};

export default TopicForm;
