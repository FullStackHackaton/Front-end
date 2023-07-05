import React, { useEffect } from "react";
import "../ProductList/ProductList.css";
import ProductCard from "../ProductCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/products/productsActions";
import { checkAuthToken } from "../../store/auth/authActions";
const ProductList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) dispatch(checkAuthToken());
  }, []);

  const { products } = useSelector((state) => state.products);

  console.log(products);
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className="card__position">
      {products?.map((item) => (
        <ProductCard key={item.slug} item={item} />
      ))}
    </div>
  );
};

export default ProductList;
