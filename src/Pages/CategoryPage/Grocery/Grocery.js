import React from "react";
import './Grocery.css';
import { Link } from 'react-router-dom';
import GrocerySubCategory from "../../../Components/GrocerySubCategory/GrocerySubCategory";

const Grocery = () => {
  return (
    <>
    <div className="grocery_container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
          Grocery
          </li>
        </ol>
      </nav>
      <div>
        <GrocerySubCategory></GrocerySubCategory>
      </div>
    </div>
  </>
  );
};

export default Grocery;
