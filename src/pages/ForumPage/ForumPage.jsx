import React, { useEffect, useState } from "react";
import "./ForumPage.css";
import { useNavigate } from "react-router-dom";
import { PiUserCirclePlusThin } from "react-icons/pi";
import { BiCommentEdit } from "react-icons/bi";
import Accept from "../../components/AcceptButtons/Accept";
import Decline from "../../components/AcceptButtons/Decline";
import TopicForm from "../../components/TopicForm/TopicForm";
import Modal from "../../components/Modal/Modal";
import SideBarMenu from "../../components/SideBarMenu/SideBarMenu";
import Navbar from "../../components/Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getTopic, leaveComment } from "../../store/topic/topicsActions";
import { API } from "../../consts";
import { checkAuthToken } from "../../store/auth/authActions";

const ForumPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) dispatch(checkAuthToken());
  }, []);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState(null);

  const topics = useSelector((state) => state.articles.posts);
  const [totalSum, setTotalSum] = useState([]);

  const handleTopicSubmit = () => {
    setModalOpen(false);
  };
  const [items, setItems] = useState(topics);
  console.log(items);

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTag, setSelectedTag] = useState("");
  const [com, setCom] = useState("");

  useEffect(() => {
    (async () => {
      const res = await fetch(`http://16.171.23.239/api/v1/article/?page=1`);
      const { results, count } = await res.json();
      setItems(results);
      let num = count;
      let arr = [];
      if (num % 10 === 0) {
        num = num / 10;
      } else {
        num = Math.floor(num / 10) + 1;
      }

      for (let i = 1; i <= num; i++) {
        arr.push(i);
      }
      setTotalSum(arr);
    })();
  }, []);

  const username = JSON.parse(localStorage.getItem("username"));

  const currentDate = new Date();
  const formattedDate = currentDate.toDateString();

  const prevPage = async () => {
    const res = await fetch(
      "http://16.171.23.239/api/v1/article/?page=" + (currentPage - 1)
    );
    const { results } = await res.json();
    setCurrentPage(currentPage - 1);
    setItems(results);
  };

  const nextPage = async () => {
    const res = await fetch(
      "http://16.171.23.239/api/v1/article/?page=" + (currentPage + 1)
    );
    const { results } = await res.json();
    setCurrentPage(currentPage + 1);
    setItems(results);
  };

  const handlePaginate = async (n) => {
    const res = await fetch("http://16.171.23.239/api/v1/article/?page=" + n);
    const { results } = await res.json();
    setCurrentPage(n);
    setItems(results);
  };

  const handleSearch = async (search) => {
    let url = `http://16.171.23.239/api/v1/article/?title=${search}`;

    const res = await fetch(url);
    const { results } = await res.json();
    setItems(results);
  };
  const handleTag = async (tag) => {
    let url = `http://16.171.23.239/api/v1/article/?tag=${selectedTag}`;
    if (tag) {
      url += `&tag=${selectedTag}`;
    }
    const res = await fetch(url);
    const { results } = await res.json();
    setItems(results);
  };

  const allTags = items ? [...new Set(items.map((post) => post.tag))] : [];

  function handleOpenComment(post) {
    setSelectedPostId(post.id);
  }

  return (
    <>
      <Navbar />
      <div className="container-home-frm">
        <SideBarMenu />
        <div className="main-card-frm">
          <div className="forum-search">
            <div className="container-input">
              <input
                type="text"
                placeholder="Search"
                name="text"
                className="input__people"
                onChange={(e) => handleSearch(e.target.value, selectedTag)}
              />

              <svg
                fill="#000000"
                width="20px"
                height="20px"
                viewBox="0 0 1920 1920"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M790.588 1468.235c-373.722 0-677.647-303.924-677.647-677.647 0-373.722 303.925-677.647 677.647-677.647 373.723 0 677.647 303.925 677.647 677.647 0 373.723-303.924 677.647-677.647 677.647Zm596.781-160.715c120.396-138.692 193.807-319.285 193.807-516.932C1581.176 354.748 1226.428 0 790.588 0S0 354.748 0 790.588s354.748 790.588 790.588 790.588c197.647 0 378.24-73.411 516.932-193.807l516.028 516.142 79.963-79.963-516.142-516.028Z"
                  fillRule="evenodd"
                ></path>
              </svg>
            </div>
          </div>

          {items &&
            items.map((post, index) => (
              <div className="main-content-frm" key={index}>
                <div className="new-title">
                  <PiUserCirclePlusThin />
                  <div className="title-text">
                    <h4>{username}</h4>
                    <p>{post.created_at}</p>
                  </div>
                </div>
                <div className="new-descr">
                  <h3>{post.title}</h3>
                  {/* <p>{post.text}</p> */}
                  <p>#{post.tag}</p>
                  {/* <img src={API + post.images[0]?.image} alt="no image" /> */}
                </div>
                <div className="post-btns">
                  <button>Like</button>
                  <button onClick={() => navigate(`/postdetails/${post.slug}`)}>
                    Comment
                  </button>
                </div>
                {/* <div className="comment-section">
                    <div className="comment-title">
                      <h4>Оставить комментарий</h4>
                    </div>
                    <div className="comment-btn">
                      <input
                        type="text"
                        placeholder="Введите комментарий"
                        value={com}
                        onChange={(e) => setCom(e.target.value)}
                      />
                      <button onClick={handleComment}>leave</button>
                    </div>
                    <div className="list-comments">
                      <p>123</p>
                    </div>
                  </div> */}
              </div>
            ))}
          <div className="pagination">
            <button disabled={currentPage <= 1} onClick={() => prevPage()}>
              Prev
            </button>
            <ul>
              {totalSum.map((item, i) => (
                <li
                  key={i}
                  className={item === currentPage ? "current-page" : ""}
                  onClick={() => handlePaginate(item)}
                >
                  {item}
                </li>
              ))}
            </ul>
            <button
              disabled={currentPage >= totalSum.length}
              onClick={() => nextPage()}
            >
              Next
            </button>
          </div>
        </div>

        {isModalOpen && (
          <Modal onClose={() => setModalOpen(false)}>
            <TopicForm onSubmit={handleTopicSubmit} />
          </Modal>
        )}
        <div className="menu-contacts-frm">
          {isModalOpen && (
            <Modal onClose={() => setModalOpen(false)}>
              <TopicForm onSubmit={handleTopicSubmit} />
            </Modal>
          )}

          <br />
          <div className="block-request-frm">
            <div className="forum-btn-create">
              <button
                className="modal-open-frm"
                onClick={() => setModalOpen(true)}
              >
                Что у вас нового?
              </button>
            </div>
            <div className="search-tag">
              <div className="tag-title">
                <h4>Filter by Tags</h4>
              </div>
              <div className="select-tag">
                <select
                  name="tags"
                  id="tags"
                  value={selectedTag}
                  onChange={(e) => setSelectedTag(e.target.value)}
                >
                  <option value="">All Tags</option>
                  {allTags.map((tag, i) => (
                    <option key={i} value={tag}>
                      {tag}
                    </option>
                  ))}
                </select>
              </div>
              <div className="tag-btn">
                <button onClick={() => handleTag(selectedTag)}>
                  Search Tag
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForumPage;
