import React from "react";
import "../ShopPage/ShopPage.css";
import ShopNavbar from "../../components/ShopBar/ShopBar";
import ProductList from "../../components/ProductList/ProductList";
import FilterCategory from "../../components/FilterCategory/FilterCategory";
const ShopPage = () => {
  return (
    <div>
      <div>
        <ShopNavbar />
      </div>
      <div id="shop__container">
        <div className="head__container">
          <h2> Makers Shop</h2>
          <div className="shop__content">
            <FilterCategory />
            <ProductList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
