import React, { useEffect, useState } from "react";
import "./Cart.css";
import { checkAuthToken } from "../../store/auth/authActions";
import { useDispatch } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("token")) dispatch(checkAuthToken());
  }, []);

  // функция для удаления всех элементов Акжол
  const removeAllItems = () => {
    setItems([]);
  };
  return (
    <>
      <div className="cart-cont">
        <div className="Cart-Container">
          <div className="Header">
            <h3 className="Heading">Shopping Cart</h3>
            <h5 className="Action" onClick={removeAllItems}>
              Remove all
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
              <h3 className="subtitle">250ml</h3>
              <img src="images/veg.png" style={{ height: "30px" }} />
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
                <div className="save">
                  <u>Save for later</u>
                </div>
                <div className="remove">
                  <u>Remove</u>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div class="checkout">
            <div class="total">
              <div>
                <div class="Subtotal">Sub-Total</div>
                <div class="items">2 items</div>
              </div>
              <div class="total-amount">$6.18</div>
            </div>
            <button class="button">Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
