import React from "react";
import "../ProductCard/ProductCard.css";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { API } from "../../consts";
import { deleteProduct } from "../../store/products/productsActions";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // console.log(item);
  return (
    <div>
      <div className="card__product">
        <div className="card__image">
          <img
            style={{
              maxWidth: "34vh",
              maxHeight: "35vh",
              borderTopLeftRadius: "30px",
              borderTopRightRadius: "30px",
            }}
            src={API + item.images[0]?.image}
            alt={item.title}
            component="img"
          />
          <div className="card__titile">
            <p>{item.price}</p>
            <p>{item.title}</p>
          </div>
        </div>
        <Link to={`/edit/${item.slug}`}>
          <button>edit</button>
        </Link>
        <div className="button__delete">
          <button
            onClick={() =>
              dispatch(deleteProduct({ slug: item.slug, navigate }))
            }
          >
            delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
