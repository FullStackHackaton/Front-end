import React, { useState } from "react";
import ShopNavbar from "../../components/ShopBar/ShopBar";
import { useDispatch, useSelector } from "react-redux";
import { ADMIN, API } from "../../consts";
import "../DetailsProduct/DetailsProduct.css";
import { deleteProduct } from "../../store/products/productsActions";
import { Link, useNavigate } from "react-router-dom";
import ButtonDelCart from "../ButtonDelCart/ButtonDelCart";
import { calcTotalPrice } from "../../helpers/functions";
import { getCart } from "../../store/cart/cartSlice";
import ProductDetails from "../../pages/ProductDetails/ProductDetails";
const DetailsProduct = ({ item }) => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [checkProduct, setCheckProduct] = useState(false);

  const addProductToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
    let newProduct = {
      item: product,
      count: 1,
      subPrice: +product.cardPrice,
    };
    console.log(product);

    let productToFind = cart.products.filter(
      (elem) => elem.item.id === product.id
    );

    if (productToFind.length == 0) {
      cart.products.push(newProduct);
    } else {
      cart.products = cart.products.filter(
        (elem) => elem.item.id !== product.id
      );
    }

    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));

    setCheckProduct((prev) => !prev);
    dispatch(getCart(cart.products));
  };

  const checkProductInCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      localStorage.setItem(
        "cart",
        JSON.stringify({ products: [], totalPrice: 0 })
      );
      cart = { products: [], totalPrice: 0 };
    }
    const check = cart.products
      ? cart.products?.find((elem) => elem.item.slug === ProductDetails.slug)
      : false;
    return check;
  };

  return (
    <>
      {/* <ShopNavbar /> */}
      <div>
        <div id="main__title">
          <h2>Dedails: {item.title}</h2>
        </div>
        <div className="details__main">
          <div className="details__image">
            <img
              style={{
                width: "30vw",
                height: "55vh",
              }}
              src={API + item.images[0]?.image}
              alt={item.title}
              component="img"
            />
          </div>
          <div className="details__descrition">
            <div className="details__text">
              <span>
                <b>кол-во:</b> {item.quantity}
              </span>
              <h3>{item.title}</h3>
              <h4>Категория: Футболки</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Perferendis voluptas voluptates error ad aliquam excepturi fuga
                delectus ipsam labore ipsum velit voluptate fugit, maxime
                blanditiis, enim eaque dolores ducimus assumenda?
              </p>
            </div>
            <div id="cart__buttons">
              <div className="del__cart">
                <ButtonDelCart />
              </div>
              <div className="cart__buttons">
                <a className="fancy" href="#">
                  <span className="top-key"></span>
                  <span className="text">Add Cart</span>
                  <span className="bottom-key-1"></span>
                  <span className="bottom-key-2"></span>
                </a>
              </div>
            </div>

            {/* {user === ADMIN ? ( */}
            <div className="logic__buttons">
              <div
                onClick={() =>
                  dispatch(deleteProduct({ slug: item.slug, navigate }))
                }
                className="delete__button"
              >
                <button className="button__delete">
                  <svg viewBox="0 0 448 512" className="svgIcon">
                    <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
                  </svg>
                </button>
              </div>
              <div className="button__edit">
                <Link to={`/edit/${item.slug}`}>
                  <button className="edit__button">
                    <span className="button_top"> Edit </span>
                  </button>
                </Link>
              </div>
            </div>
            {/* ) : ( */}
            {/* <></> */}
            {/* )} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsProduct;
