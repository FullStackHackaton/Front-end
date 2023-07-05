import React, { useState } from "react";
import "./Cart.css";
import ShopNavbar from "../ShopBar/ShopBar";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  return (
    <>
      <ShopNavbar />
      <div className="cart-cont">
        <div className="Cart-Container">
          <div className="Header">
            <h3 className="Heading">Shopping Cart</h3>
            <h5 onClick={() => navigate("/shop")} className="Action">
              close Cart
            </h5>
          </div>
          <div className="Cart-Items">
            <div className="image-box">
              <img
                src="https://printanika.ru/wp-content/uploads/2013/12/pechat-kartinki-na-futbolke.jpg"
                style={{ height: "120px" }}
              />
            </div>
            <div className="about">
              <h1 className="title">Кружка</h1>
            </div>
            <div className="counter">
              <div className="btn-cart">+</div>
              <div className="counter">
                <div className="count">2</div>
              </div>
              <div className="btn-cart">-</div>
            </div>
            <div className="prices">
              <div className="prices">
                <div className="amount">$2.99</div>

                <div className="remove">
                  <u>Remove</u>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div class="checkout">
            <div class="total">
              <div className="total__items">
                <div class="Subtotal">Total</div>
                <div class="items">2 items</div>
              </div>
              <div class="total-amount">$6.18</div>
            </div>
            <button class="button__chekout">Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
