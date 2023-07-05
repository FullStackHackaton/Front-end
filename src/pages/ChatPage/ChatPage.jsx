import React from "react";
import { useNavigate } from "react-router-dom";
import "..//ChatPage/ChatPage.css";

const ChatPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Данная страница еще в разработке</h1>

      <button onClick={() => navigate("/")}>Домой</button>
    </div>
  );
};

export default ChatPage;
