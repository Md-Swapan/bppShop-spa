import React from "react";
import "./Fashion.css";
import { Link } from "react-router-dom";
import FashionSubCategory from "../../../Components/FashionSubCategory/FashionSubCategory";

const Fashion = () => {
  return (
    <>
      <div className="fashion_container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Fashion
            </li>
          </ol>
        </nav>
        <div>
          <FashionSubCategory></FashionSubCategory>
        </div>
      </div>
    </>
  );
};

export default Fashion;
<h1>Fashion Page</h1>;
