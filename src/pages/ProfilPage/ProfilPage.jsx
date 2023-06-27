import React from "react";
import "./ProfilPage.css";

const ProfilPage = () => {
  return (
    <>
      <div className="container">
        <div className="profil">
          <div className="image"></div>
        </div>
        <div className="title">
          <h1>User User</h1>
        </div>
        <div className="btn_div">
          <button className="btn"> Message</button>
        </div>
        <div className="title_div">
          <div className="title_info">
            <div className="size">age: 20</div>
            <div className="size">Group: PY28</div>
            <div className="size">
              About me: uwcbdbcipecbeip cheicoewcvievipeuprev
            </div>
          </div>
        </div>
        <div className="post">
          <div className="post_1">Post</div>
          <div className="post_1">Project</div>
        </div>
        <div className="box">
          <div className="box1"></div>
          <div className="box1"></div>
          <div className="box1"></div>
        </div>
      </div>
    </>
  );
};

export default ProfilPage;
