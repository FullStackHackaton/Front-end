import React, { useState } from "react";
import "./TopicForm.css";

const TopicForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitle("");
    setContent("");
  };

  return (
    <div className="topic-form-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Тема:</label>
          <input
            type="text"
            id="title-frm-modal"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="content">Содержание:</label>
          <input
            id="content-frm-modal"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></input>
        </div>
        <button type="submit">Создать Тему</button>
      </form>
    </div>
  );
};

export default TopicForm;
