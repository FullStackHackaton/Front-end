import React, { useState } from "react";
import "./ForumPage.css";
import { useNavigate } from "react-router-dom";
import { PiUserCirclePlusThin, PiShoppingBagLight } from "react-icons/pi";
import { GrHomeRounded } from "react-icons/gr";
import { TbMessageCircle2 } from "react-icons/tb";
import { GoPeople, GoShare } from "react-icons/go";
import { MdOutlineForum } from "react-icons/md";
import { SlSettings } from "react-icons/sl";
import { AiOutlineLike } from "react-icons/ai";
import { BiCommentEdit } from "react-icons/bi";
import Accept from "../../components/AcceptButtons/Accept";
import Decline from "../../components/AcceptButtons/Decline";
import TopicForm from "../../components/TopicForm/TopicForm";
import Modal from "../../components/Modal/Modal";
import SideBarMenu from "../../components/SideBarMenu/SideBarMenu";
import Navbar from "../../components/Navbar/Navbar";

const ForumPage = () => {
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false);

  const handleTopicSubmit = (topicData) => {
    console.log(topicData);
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
            <div className="block-news-frm">
              <div className="new-frm">
                <div className="new-title-frm">
                  <PiUserCirclePlusThin />
                  <div className="title-text-frm">
                    <h4>Mark Zuckerberg</h4>
                    <p>27/06/23</p>
                  </div>
                </div>
                <p>i sold facebook.</p>
                <div className="new-img-frm">
                  <img
                    src="https://s3.abcstatics.com/media/tecnologia/2018/03/21/3917767-k9VF--620x349@abc.jpg"
                    alt="error-img"
                  />
                </div>
                <div className="frm-new-btns">
                  <AiOutlineLike />
                  <BiCommentEdit />
                </div>
              </div>
            </div>
          </div>
          <div className="main-content-frm">
            <div className="block-news-frm">
              <div className="new-frm">
                <div className="new-title-frm">
                  <PiUserCirclePlusThin />
                  <div className="title-text-frm">
                    <h4>Mark Zuckerberg</h4>
                    <p>27/06/23</p>
                  </div>
                </div>
                <p>i sold facebook.</p>
                <div className="new-img-frm">
                  <img
                    src="https://s3.abcstatics.com/media/tecnologia/2018/03/21/3917767-k9VF--620x349@abc.jpg"
                    alt="error-img"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="main-content-frm">
            <div className="block-news-frm">
              <div className="new-frm">
                <div className="new-title-frm">
                  <PiUserCirclePlusThin />
                  <div className="title-text-frm">
                    <h4>Mark Zuckerberg</h4>
                    <p>27/06/23</p>
                  </div>
                </div>
                <p>i sold facebook.</p>
                <div className="new-img-frm">
                  <img
                    src="https://s3.abcstatics.com/media/tecnologia/2018/03/21/3917767-k9VF--620x349@abc.jpg"
                    alt="error-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="menu-contacts-frm">
          {isModalOpen && (
            <Modal onClose={() => setModalOpen(false)}>
              <TopicForm onSubmit={handleTopicSubmit} />
            </Modal>
          )}
          <div className="block-request-frm">
            <p>Requests</p>
            <div className="request-frm">
              <div className="request-text-frm">
                <PiUserCirclePlusThin />
                <p>
                  <strong>Nurbol</strong> wants to add you to friends
                </p>
              </div>
              <div className="request-btns-frm">
                <Accept />
                <Decline />
              </div>
            </div>
            <div className="request-frm">request</div>
          </div>
          <br />
          <div className="block-contacts-frm">
            <p>Contacts</p>
            <div className="contacts-frm">user user</div>
            <div className="contacts-frm">user user</div>
            <div className="contacts-frm">user user</div>
            <div className="contacts-frm">user user</div>
            <div className="contacts-frm">user user</div>
            <div className="contacts-frm">user user</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForumPage;
