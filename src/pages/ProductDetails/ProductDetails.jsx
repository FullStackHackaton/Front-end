import React, { useEffect, useState } from "react";
import { getOneProduct } from "../../store/products/productsActions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DetailsProduct from "../../components/DetailsProduct/DetailsProduct";

const ProductDetails = () => {
  const oneProduct = useSelector((state) => state.products.oneProduct);
  const dispatch = useDispatch();
  const { slug } = useParams();

  useEffect(() => {
    dispatch(getOneProduct(slug));
  }, [slug]);

  return (
    <div>
      {oneProduct && <DetailsProduct key={oneProduct.slug} item={oneProduct} />}
    </div>
  );
};

export default ProductDetails;
