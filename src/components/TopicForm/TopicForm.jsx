import React, { useState } from "react";
import "./TopicForm.css";

const TopicForm = () => {
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

      // Здесь вы можете отправить форму данных на сервер для загрузки фото
      // Например, используя библиотеку axios:
      // axios.post('/upload', formData)
      //   .then(response => {
      //     // Обработка успешной загрузки
      //   })
      //   .catch(error => {
      //     // Обработка ошибки загрузки
      //   });
    }
  };

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
        <div>
          <input type="file" onChange={handleFileChange} />
        </div>
        <button type="submit" onClick={handleUpload}>
          Создать Тему
        </button>
      </form>
    </div>
  );
};

export default TopicForm;
