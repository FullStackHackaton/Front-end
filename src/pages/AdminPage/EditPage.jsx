import React from "react";
import EditProductForm from "../../components/EditProductForm/EditProductForm";
import ShopNavbar from "../../components/ShopBar/ShopBar";
import SideBarMenu from "../../components/SideBarMenu/SideBarMenu";

const EditPage = () => {
  return (
    <div>
      <ShopNavbar />
      <div id="admin__container">
        {/* <SideBarMenu /> */}
        <EditProductForm />
      </div>
    </div>
  );
};

export default EditPage;
