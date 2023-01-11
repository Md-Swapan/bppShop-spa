import React from "react";
import { Link } from "react-router-dom";
import CosmeticsSubCategory from "../../../Components/CosmeticsSubCategory/CosmeticsSubCategory";
import "./Cosmetics.css";

const Cosmetics = () => {
  return (
    <>
      <div className="cosmetics_container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Cosmetics
            </li>
          </ol>
        </nav>
        <div>
          <CosmeticsSubCategory></CosmeticsSubCategory>
        </div>
      </div>
    </>
  );
};

export default Cosmetics;
