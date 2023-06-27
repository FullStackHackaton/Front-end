import React from "react";
import "./ProfilPage.css";
import ProfilFooter from "../../components/ProfilInfo/ProfilFooter";

const ProfilPage = () => {
  return (
    <>
      <div className="container">
        <div className="profil">
          <img
            className="image"
            src="https://276709.selcdn.ru/proektoria/new/professions/2020/03/24/8fe0093bb30d6f8c31474bd0764e6ac0/2019-11-02_15-54-06.jpg"
            alt=""
          />
        </div>
        <div className="title">
          <h1>Эрлан</h1>
        </div>
        <div className="btn_div">
          <button className="btn"> Message</button>
        </div>
        <div className="title_div">
          <div className="title_info">
            <div className="input">
              <button className="value">Возраст: $$$</button>
              <button className="value">Account</button>
              <button className="value">Appearance</button>
              <button className="value">Accessibility</button>
              <button className="value">Notifications</button>
            </div>
          </div>
        </div>
        <div className="post">
          <div className="post_1">Post</div>
          <div className="post_1">Project</div>
        </div>
        <div className="box">
          <div className="box1">
            <img
              className="image_post"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSAGI9pMXaLDumjgcdorGQ7htMgbv_uSaJXA&usqp=CAU"
              alt=""
            />
          </div>
          <div className="box1">
            <img
              className="image_post"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSHHE2l8ng-yUpl4wKYyUbB8imvwKsfh7KqmkRCw67FX_-dOIlJHd1yscdb_Dq79s9Si4&usqp=CAU"
              alt=""
            />
          </div>
          <div className="box1">
            <img
              className="image_post"
              src="https://media.istockphoto.com/id/1232324930/vector/kid-programmer-learn-coding-on-computer-tablet-or-phone-child-create-code-or-program-of-game.jpg?s=612x612&w=0&k=20&c=oSiWKFT-eSyC5QjF4n1d3C5ijiI861bKrrD6AgUICkQ="
              alt=""
            />
          </div>
        </div>
      </div>
      <ProfilFooter />
    </>
  );
};

export default ProfilPage;
