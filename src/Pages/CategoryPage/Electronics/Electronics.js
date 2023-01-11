import React from "react";
import { Link } from "react-router-dom";
import ElectronicsSubCategory from "../../../Components/ElectronicsSubCategory/ElectronicsSubCategory";
import "./Electronics.css";

const Electronics = () => {
  return (
    <>
      <div className="electronics_container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Electronics
            </li>
          </ol>
        </nav>
        <div>
          <ElectronicsSubCategory></ElectronicsSubCategory>
        </div>
      </div>
    </>
  );
};

export default Electronics;
