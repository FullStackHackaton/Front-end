import React, { useEffect } from "react";
import "../AdminPage/AdminPage.css";
import AddProductForm from "../../components/AddProductForm/AddProductForm";
import ShopNavbar from "../../components/ShopBar/ShopBar";
import { checkAuthToken } from "../../store/auth/authActions";
import { useDispatch } from "react-redux";
const AdminPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("token")) dispatch(checkAuthToken());
  }, []);
  return (
    <div>
      <ShopNavbar />
      <div id="admin__container">
        <AddProductForm />
      </div>
    </div>
  );
};

export default AdminPage;
