import React, { useEffect } from "react";
import "../ProductList/ProductList.css";
import ProductCard from "../ProductCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/products/productsActions";
import ProductDetails from "../../pages/ProductDetails/ProductDetails";
const ProductList = () => {
  const dispatch = useDispatch();

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
