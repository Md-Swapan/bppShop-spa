import React, { useEffect, useState } from "react";
import "./Category.css";
import islamic from "../../../Assets/Images/categoryImg/download (10).png";
import grocery from "../../../Assets/Images/categoryImg/download (7).png";
import fashion from "../../../Assets/Images/categoryImg/download (5).png";
import babyCare from "../../../Assets/Images/categoryImg/download (2).png";
import electronics from "../../../Assets/Images/categoryImg/download (4).png";
import furniture from "../../../Assets/Images/categoryImg/download (6).png";
import shoe from "../../../Assets/Images/categoryImg/download (12).png";
import cosmetic from "../../../Assets/Images/categoryImg/download (3).png";
import pharmacy from "../../../Assets/Images/categoryImg/download (11).png";
import eyeCare from "../../../Assets/Images/categoryImg/download (1).png";
import sports from "../../../Assets/Images/categoryImg/Sport_balls.svg.png";
import homeAppliance from "../../../Assets/Images/categoryImg/download (9).png";
import vehicle from "../../../Assets/Images/categoryImg/download (14).png";
import hardware from "../../../Assets/Images/categoryImg/download (17).png";
import usedProducts from "../../../Assets/Images/categoryImg/download (16).png";
import watch from "../../../Assets/Images/categoryImg/download.png";
import CategoryCard from "./../../../Components/Cards/CategoryCard/CategoryCard";
import "react-loading-skeleton/dist/skeleton.css";

const CategoryData = [
  {
    id: 1,
    path: "islamic",
    title: "Islamic",
    img: islamic,
  },
  {
    id: 2,
    path: "grocery",
    title: "Grocery (only in Dhaka city)",
    img: grocery,
  },
  {
    id: 3,
    path: "fashion",
    title: "Fashion",
    img: fashion,
  },
  {
    id: 4,
    path: "baby-care",
    title: "Baby Care",
    img: babyCare,
  },
  {
    id: 5,
    path: "cosmetics",
    title: "Cosmetics",
    img: cosmetic,
  },
  {
    id: 6,
    path: "shoes",
    title: "Shoes",
    img: shoe,
  },
  {
    id: 7,
    path: "eye-care",
    title: "Eye Care",
    img: eyeCare,
  },
  {
    id: 8,
    path: "sports",
    title: "Sports",
    img: sports,
  },
  {
    id: 9,
    path: "watch",
    title: "Watch",
    img: watch,
  },
  {
    id: 10,
    path: "electronics",
    title: "Electronics",
    img: electronics,
  },
  {
    id: 11,
    path: "furniture",
    title: "Furniture",
    img: furniture,
  },

  {
    id: 12,
    path: "pharmacy",
    title: "Pharmacy",
    img: pharmacy,
  },

  {
    id: 13,
    path: "home-appliance-decorate",
    title: "Home Appliance & Decorate",
    img: homeAppliance,
  },
  {
    id: 14,
    path: "vehicle",
    title: "Vehicle",
    img: vehicle,
  },
  {
    id: 15,
    path: "hardware-cables-sanitary",
    title: "Hardware, Cables & Sanitary",
    img: hardware,
  },
  {
    id: 16,
    path: "used-products",
    title: "Used Products",
    img: usedProducts,
  },
];

const Category = ({allCategory}) => {
  // console.log(allCategory);

  return (
    <>
      <div className="categoryView-section">
        <div className="categoryView-container">
          <div className="category_content">
            {allCategory.map((category) => (
              <CategoryCard key={category.id} category={category}/>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
