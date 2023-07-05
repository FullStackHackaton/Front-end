import React, { useEffect, useState } from "react";
import "../AddProductForm/AddProductForm.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";
import {
  addProduct,
  editProduct,
  getCategories,
  getOneProduct,
} from "../../store/products/productsActions";
import { API } from "../../consts";
import { checkAuthToken } from "../../store/auth/authActions";
const EditProductForm = () => {
  useEffect(() => {
    if (localStorage.getItem("token")) dispatch(checkAuthToken());
  }, []);
  const { oneProduct, categories } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [product, setProduct] = useState(oneProduct);

  const { slug } = useParams();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getOneProduct(slug));
  }, []);

  useEffect(() => {
    setProduct(oneProduct);
  }, [oneProduct]);

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

  function handleSave() {
    let formData = new FormData();
    formData.append("title", product.title);
    formData.append("description", product.description);
    formData.append("price", product.price);
    formData.append("category", product.category);
    formData.append("image", product.image);
    dispatch(editProduct({ slug, formData, navigate }));
  }

  if (!product) return <></>;

  return (
    <div>
      <div className="container">
        <div className="card">
          <div id="modal__head">
            <a className="singup">Edit Product</a>
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
              // files={API + product?.images[0]?.image}
              // value={product?.image}
              name="image"
            />
          </div>

          <div className="inputBox">
            <input
              type="text"
              required="required"
              name="title"
              value={product?.title}
              onChange={handleChange}
            />
            <span>Title</span>
          </div>

          <div className="inputBox">
            <input
              type="text"
              required="required"
              name="description"
              value={product.description}
              onChange={handleChange}
            />
            <span>Description</span>
          </div>
          <div className="inputBox">
            <input
              type="text"
              required="required"
              name="price"
              value={product?.price}
              onChange={handleChange}
            />
            <span>Price</span>
          </div>
          <div className="inputBox">
            <input
              type="text"
              required="required"
              value={product?.quantity}
              onChange={handleChange}
              name="quantity"
            />
            <span>Quantity</span>
          </div>
          <div className="filter__block">
            <div className="filter_func">
              <select
                className="device__list"
                name="category"
                value={product?.category}
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
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProductForm;
