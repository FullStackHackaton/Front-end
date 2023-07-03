import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./TopicForm.css";
import { createTopic } from "../../store/topic/topicsSlice";
const TopicForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("photo", selectedFile);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const topicData = {
      title,
      content,
    };

    dispatch(createTopic(topicData))
      .then(() => {
        setTitle("");
        setContent("");
      })
      .catch((error) => {
        console.error("Ошибка создания темы:", error);
      });
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
        <div>
          <input id="input-frm-modal" type="file" onChange={handleFileChange} />
        </div>
        <button type="submit" onClick={handleUpload}>
          Создать Тему
        </button>
      </form>
    </div>
  );
};

export default TopicForm;
