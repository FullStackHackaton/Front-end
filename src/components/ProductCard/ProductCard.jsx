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
              maxWidth: "33vh",
              maxHeight: "35vh",
              borderTopLeftRadius: "30px",
              borderTopRightRadius: "30px",
            }}
            src={
              "https://cdn5.vedomosti.ru/crop/image/2023/2y/1fcdsa/original-1ujj.jpg?height=609&width=1082"
            }
            alt="as"
            component="img"
          />
          <div className="card__titile">
            <p>abcd</p>
            <p>1231</p>
          </div>
        </div>
        {/* <Link to={`/edit/${item.slug}`}> */}
        <button>edit</button>
        {/* </Link> */}
        <div className="button__delete">
          <button
          // onClick={() =>
          //   dispatch(deleteProduct({ slug: item.slug, navigate }))
          // }
          >
            delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
