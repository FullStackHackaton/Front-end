import React, { useEffect } from "react";
import "../ShopBar/ShopBar.css";
import { useNavigate } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { PiShoppingCartThin } from "react-icons/pi";
import { AiOutlineShop } from "react-icons/ai";
import Search from "../SearchButton/Search";
import { useDispatch } from "react-redux";
import { checkAuthToken } from "../../store/auth/authActions";

const ShopNavbar = () => {
  const username = JSON.parse(localStorage.getItem("username"));
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) dispatch(checkAuthToken());
  }, []);

  return (
    <div>
      <nav>
        <div className="logo" onClick={() => navigate("/")}>
          <img src={process.env.PUBLIC_URL + "/logo.svg"} alt="logo-error" />
        </div>

        <div id="nav__widjets">
          <AiOutlineShop
            className="shop__icon"
            onClick={() => navigate("/shop")}
          />
          <div id="user__iconname">
            <p> {username}</p>
            <BiUserCircle
              className="user__icon"
              onClick={() => navigate("/admin")}
            />
          </div>
          <div id="nav-item-menu12">
            <div id="cart__pannel" onClick={() => navigate("/cart")}>
              <PiShoppingCartThin />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default ShopNavbar;
