import React from "react";
import "./Furniture.css";
import { Link } from "react-router-dom";
import FurnitureSubCategory from "../../../Components/FurnitureSubCategory/FurnitureSubCategory";

const Furniture = () => {
  return (
    <>
      <div className="furniture_container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Furniture
            </li>
          </ol>
        </nav>
        <div>
          <FurnitureSubCategory></FurnitureSubCategory>
        </div>
      </div>
    </>
  );
};

export default Furniture;
