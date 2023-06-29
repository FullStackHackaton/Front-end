import React from "react";
import "../ShopBar/ShopBar.css";
import { useNavigate } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { PiShoppingCartThin } from "react-icons/pi";
import Search from "../SearchButton/Search";
const ShopNavbar = () => {
  const username = JSON.parse(localStorage.getItem("username"));

  const navigate = useNavigate();
  return (
    <div>
      <nav>
        <div className="logo" onClick={() => navigate("/")}>
          <img src={process.env.PUBLIC_URL + "/logo.svg"} alt="logo-error" />
        </div>

        <div id="nav__widjets">
          <Search />
          {/* <div class="container-input">
            <input type="text" placeholder="Search" name="text" class="input" />
            <svg
              fill="#000000"
              width="20px"
              height="20px"
              viewBox="0 0 1920 1920"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M790.588 1468.235c-373.722 0-677.647-303.924-677.647-677.647 0-373.722 303.925-677.647 677.647-677.647 373.723 0 677.647 303.925 677.647 677.647 0 373.723-303.924 677.647-677.647 677.647Zm596.781-160.715c120.396-138.692 193.807-319.285 193.807-516.932C1581.176 354.748 1226.428 0 790.588 0S0 354.748 0 790.588s354.748 790.588 790.588 790.588c197.647 0 378.24-73.411 516.932-193.807l516.028 516.142 79.963-79.963-516.142-516.028Z"
                fill-rule="evenodd"
              ></path>
            </svg>
          </div> */}
          <div id="user__iconname">
            <p> {username}</p>
            <BiUserCircle className="user__icon" />
          </div>
          <div id="nav-item-menu12">
            <div id="cart__pannel">
              <PiShoppingCartThin />
            </div>
            {/* <button onClick={() => navigate("/register")}>Sign up</button>/
          <button onClick={() => navigate("/login")}>Log in</button> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default ShopNavbar;
