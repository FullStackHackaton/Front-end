import React, { useEffect, useState } from "react";
import "./Cart.css";
import ShopNavbar from "../ShopBar/ShopBar";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { calcSubPrice, calcTotalPrice } from "../../helpers/functions";
import { getCart } from "../../store/cart/cartSlice";
import { API } from "../../consts";

const Cart = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const dispatch = useDispatch();
  const { products, totalPrice } = useSelector((state) => state.cart.cart);

  useEffect(() => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      localStorage.setItem(
        "cart",
        JSON.stringify({ products: [], totalPrice: 0 })
      );
      cart = { products: [], totalPrice: 0 };
    }
    dispatch(getCart(cart));
  }, []);

  const changeProductCount = (count, id) => {
    let cart = JSON.parse(localStorage.getItem("cart"));

    cart.products = cart.products.map((product) => {
      if (product.item.id === id) {
        product.count = count;
        product.subPrice = calcSubPrice(product);
      }
      return product;
    });
    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch(getCart(cart));
  };

  const deleteCartProduct = (id) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.products = cart.products.filter((elem) => elem.item.id !== id);
    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch(getCart(cart));
  };

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
          {products?.map((item) => (
            <></>
              <div className="Cart-Items">
                <div className="image-box">
                  <img
                    src={API + item.item.images[0]?.image}
                    style={{ height: "120px" }}
                  />
                </div>
                <div className="about">
                  <h1 className="title">{item.item.title}</h1>
                </div>
                <div className="counter">
                  <div className="btn-cart">+</div>
                  <div className="counter">
                    <div className="count">200</div>
                  </div>
                  <div className="btn-cart">-</div>
                </div>
                <div className="prices">
                  <div className="prices">
                    <div className="amount">{item.item.price} сом</div>
                    <div className="remove">
                      <button onClick={() => deleteCartProduct(item.item.id)}>
                        Remove
                      </button>
                    </div>
                    <div className="items">quantity: {item.item.quantity}</div>
                  </div>
                </div>
              </div>
              <hr />
            </React.Fragment>
          ))}

          <div className="checkout">
            <div className="total">
              <div className="total-amount"> Total: {totalPrice} сом</div>
            </div>
            <button className="button__chekout">Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
