import React from "react";
import "../ProductCard/ProductCard.css";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { API } from "../../consts";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // console.log(item);
  return (
    <div>
      <div
        onClick={() => navigate("/details/" + item.slug)}
        className="card__product"
      >
        <div className="card__image">
          <img
            style={{
              maxWidth: "32vw",
              maxHeight: "45vh",
              background: "transparent",
            }}
            src={API + item.images[0]?.image}
            alt={item.title}
            component="img"
          />
          <div className="card__titile">
            <p>{item.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
