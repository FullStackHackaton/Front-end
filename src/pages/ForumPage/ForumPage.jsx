import React, { useState } from "react";
import "./ForumPage.css";
import { useNavigate } from "react-router-dom";
import { PiUserCirclePlusThin, BiCommentEdit } from "react-icons/pi";
import Accept from "../../components/AcceptButtons/Accept";
import Decline from "../../components/AcceptButtons/Decline";
import TopicForm from "../../components/TopicForm/TopicForm";
import Modal from "../../components/Modal/Modal";
import SideBarMenu from "../../components/SideBarMenu/SideBarMenu";
import Navbar from "../../components/Navbar/Navbar";

const ForumPage = () => {
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false);
  const [topics, setTopics] = useState([]);

  const handleTopicSubmit = (topicData) => {
    console.log(topicData);
    setTopics([...topics, topicData]); // Добавление новой темы в массив
    setModalOpen(false);
  };

  return (
    <div>
      <Navbar />
      <div className="container-home-frm">
        <SideBarMenu />
        <div className="main-card-frm">
          <button className="modal-open-frm" onClick={() => setModalOpen(true)}>
            Что у вас нового?
          </button>
          <div className="main-content-frm">
            {topics.map((topic, index) => (
              <div key={index} className="block-news-frm">
                <div className="new-frm">
                  <div className="new-title-frm">
                    <PiUserCirclePlusThin />
                    <div className="title-text-frm">
                      <h4>{topic.title}</h4>
                      <p>{topic.content}</p>
                    </div>
                  </div>
                  {topic.image && (
                    <div className="new-img-frm">
                      <img src="{topic.image}" alt="error-img" />
                    </div>
                  )}
                  <div className="frm-new-btns">{/* <BiCommentEdit /> */}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="menu-contacts-frm">
          {isModalOpen && (
            <Modal onClose={() => setModalOpen(false)}>
              <TopicForm onSubmit={handleTopicSubmit} />
            </Modal>
          )}

          <br />
        </div>
      </div>
    </div>
  );
};

export default ForumPage;
