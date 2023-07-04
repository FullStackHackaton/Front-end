import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./TopicForm.css";
import { createTopic } from "../../store/topic/topicsActions";

const TopicForm = ({ onSubmit }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  // const handleFileChange = (event) => {
  //   setSelectedFile(event.target.files[0]);
  // };

  // const handleUpload = () => {
  //   if (selectedFile) {
  //     const formData = new FormData();
  //     formData.append("photo", selectedFile);
  //   }
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const topicData = {
  //     title,
  //     content,
  //   };

  //   onSubmit(topicData); // Передача данных в родительский компонент через коллбэк

  //   dispatch(createTopic(topicData))
  //     .then(() => {
  //       setTitle("");
  //       setContent("");
  //     })
  //     .catch((error) => {
  //       console.error("Ошибка создания темы:", error);
  //     });
  // };

  function handleUpload() {
    if (!title.trim()) {
      alert("enter input");
      return;
    }

    const topicData = new FormData();
    topicData.append("title", title);
    topicData.append("text", content);

    dispatch(createTopic(topicData));
  }

  return (
    <div className="topic-form-container">
      {/* <div onSubmit={handleSubmit}> */}
      <div>
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
          <input
            id="input-frm-modal"
            type="file"
            onChange={(e) => setSelectedFile(e.target.files[0])}
          />
        </div>
        <button type="submit" onClick={handleUpload}>
          Создать Тему
        </button>
      </div>
    </div>
  );
};

export default TopicForm;
