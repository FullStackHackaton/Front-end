import React from "react";
import "../AdminPage/AdminPage.css";
import AddProductForm from "../../components/AddProductForm/AddProductForm";
import ShopNavbar from "../../components/ShopBar/ShopBar";
const AdminPage = () => {
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
