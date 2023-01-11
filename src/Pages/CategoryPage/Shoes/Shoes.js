import React from "react";
import { Link } from "react-router-dom";
import ShoesSubCategory from "../../../Components/ShoesSubCategory/ShoesSubCategory";
import "./Shoes.css";

const Shoes = () => {
  return (
    <>
      <div className="shoes_container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Shoes
            </li>
          </ol>
        </nav>
        <div>
          <ShoesSubCategory></ShoesSubCategory>
        </div>
      </div>
    </>
  );
};

export default Shoes;
