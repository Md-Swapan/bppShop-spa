import React from "react";
import './UsedProducts.css';
import { Link } from "react-router-dom";
import UsedProductsSubCategory from "../../../Components/UsedProductsSubCategory/UsedProductsSubCategory";

const UsedProducts = () => {
  return (
    <>
      <div className="used_products_container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Used Products
            </li>
          </ol>
        </nav>
        <div>
          <UsedProductsSubCategory></UsedProductsSubCategory>
        </div>
      </div>
    </>
  );
};

export default UsedProducts;
