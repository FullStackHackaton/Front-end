import React, { useEffect, useState } from "react";
import "../AddProductForm/AddProductForm.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";

import {
  addProduct,
  getCategories,
} from "../../store/products/productsActions";
import { checkAuthToken } from "../../store/auth/authActions";
const AddProductForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) dispatch(checkAuthToken());
  }, []);

  const { categories } = useSelector((state) => state.products);

  const [product, setProduct] = useState({
    image: "",
    title: "",
    description: "",
    price: "",
    quantity: "",
    category: "",
  });

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setProduct({
        ...product,
        [e.target.name]: e.target.files[0],
      });
    } else {
      setProduct({
        ...product,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSave = async () => {
    let formData = new FormData();

    formData.append("image", product.image);
    formData.append("title", product.title);
    formData.append("description", product.description);
    formData.append("price", product.price);
    formData.append("quantity", product.quantity);
    formData.append("category", product.category);

    dispatch(addProduct({ formData, navigate }));
  };

  return (
    <div>
      <div className="container">
        <div className="card">
          <div id="modal__head">
            <a className="singup">ADD PRODUCT</a>
            <div onClick={() => navigate("/shop")} className="close__editpage">
              <AiOutlineCloseCircle className="close__edit" />
            </div>
          </div>
          <div className="inputBox1">
            <input
              type="file"
              required="required"
              id="input__file"
              onChange={handleChange}
              name="image"
            />
          </div>

          <div className="inputBox">
            <input
              type="text"
              required="required"
              value={product.title}
              onChange={handleChange}
              name="title"
            />
            <span>Title</span>
          </div>

          <div className="inputBox">
            <input
              type="text"
              required="required"
              value={product.description}
              onChange={handleChange}
              name="description"
            />
            <span>Description</span>
          </div>
          <div className="inputBox">
            <input
              type="text"
              required="required"
              onChange={handleChange}
              value={product.price}
              name="price"
            />
            <span>Price</span>
          </div>
          <div className="inputBox">
            <input
              type="text"
              required="required"
              value={product.quantity}
              onChange={handleChange}
              name="quantity"
            />
            <span>Quantity</span>
          </div>
          <div className="filter__block">
            <div className="filter_func">
              <select
                name="category"
                className="device__list"
                // name="Device List"
                value={product.category}
                onChange={handleChange}
              >
                {categories?.map((item) => (
                  <option key={item.slug} value={item.slug}>
                    {item.title}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div onClick={() => navigate("/shop")}>
            <button onClick={handleSave} className="enter">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductForm;
