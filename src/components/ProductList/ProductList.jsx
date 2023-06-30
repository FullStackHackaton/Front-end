import React from "react";
import "../ProductList/ProductList.css";
import ProductCard from "../ProductCard/ProductCard";
const ProductList = () => {
  return (
    <div className="card__position">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default ProductList;
