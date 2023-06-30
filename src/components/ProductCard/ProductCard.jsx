import React from "react";
import "../ProductCard/ProductCard.css";
const ProductCard = () => {
  return (
    <div>
      <div className="card">
        <div className="card__image">
          <img
            style={{ backgroundSize: "cover" }}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Blue_Tshirt.jpg/220px-Blue_Tshirt.jpg"
            alt="t-short"
          />
          <p className="card__title">T-SHORT with Makers Logo</p>
        </div>
        <div className="card__titile"></div>
      </div>
    </div>
  );
};

export default ProductCard;
