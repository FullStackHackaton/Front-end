import React, { useEffect, useState } from "react";
import { getOneProduct } from "../../store/products/productsActions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DetailsProduct from "../../components/DetailsProduct/DetailsProduct";
import { calcTotalPrice } from "../../helpers/functions";
import { getCart } from "../../store/cart/cartSlice";

const ProductDetails = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const { slug } = useParams();
  console.log(products);
  useEffect(() => {
    dispatch(getOneProduct(slug));
  }, [slug]);

  return (
    <div>
      {products?.map((item) => (
        <DetailsProduct key={item.slug} item={item} />
      ))}
    </div>
  );
};

export default ProductDetails;
