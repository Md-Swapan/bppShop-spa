import React from "react";
import "./Vehicle.css";
import { Link } from "react-router-dom";
import VehicleSubCategory from "../../../Components/VehicleSubCategory/VehicleSubCategory";

const Vehicle = () => {
  return (
    <>
      <div className="vehicle_container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Vehicle
            </li>
          </ol>
        </nav>
        <div>
          <VehicleSubCategory></VehicleSubCategory>
        </div>
      </div>
    </>
  );
};

export default Vehicle;
