import React, { useState } from "react";
import "./MainCategoryView.css";
import islamic from "../../Assets/Images/categoryImg/download (10).png";
import grocery from "../../Assets/Images/categoryImg/download (7).png";
import fashion from "../../Assets/Images/categoryImg/download (5).png";
import babycare from "../../Assets/Images/categoryImg/download (2).png";
import electronics from "../../Assets/Images/categoryImg/download (4).png";
import furniture from "../../Assets/Images/categoryImg/download (6).png";
import shoe from "../../Assets/Images/categoryImg/download (12).png";
import cosmetic from "../../Assets/Images/categoryImg/download (3).png";
import pharmacy from "../../Assets/Images/categoryImg/download (11).png";
import eyecare from "../../Assets/Images/categoryImg/download (1).png";
import sports from "../../Assets/Images/categoryImg/Sport_balls.svg.png";
import homeappliance from "../../Assets/Images/categoryImg/download (9).png";
import vehicle from "../../Assets/Images/categoryImg/download (14).png";
import hardware from "../../Assets/Images/categoryImg/download (17).png";
import usedproducts from "../../Assets/Images/categoryImg/download (16).png";
import watch from "../../Assets/Images/categoryImg/download.png";
import MainCategoryViewCard from "./MainCategoryViewCard/MainCategoryViewCard";

const CategoryData = [
  {
    id: 1,
    title: "Islamic",
    img: islamic,
  },
  {
    id: 2,
    title: "Grocery (only in Dhaka city)",
    img: grocery,
  },
  {
    id: 3,
    title: "Fashion",
    img: fashion,
  },
  {
    id: 4,
    title: "Baby Care",
    img: babycare,
  },
  {
    id: 5,
    title: "Cosmetic",
    img: cosmetic,
  },
  {
    id: 6,
    title: "Shoe",
    img: shoe,
  },
  {
    id: 7,
    title: "Eye Care",
    img: eyecare,
  },
  {
    id: 8,
    title: "Sports",
    img: sports,
  },
  {
    id: 9,
    title: "Watch",
    img: watch,
  },
  {
    id: 10,
    title: "Electronics",
    img: electronics,
  },
  {
    id: 11,
    title: "Furniture",
    img: furniture,
  },

  {
    id: 12,
    title: "Pharmacy",
    img: pharmacy,
  },

  {
    id: 13,
    title: "Home Appliance & Decorate",
    img: homeappliance,
  },
  {
    id: 14,
    title: "Vehicle",
    img: vehicle,
  },
  {
    id: 15,
    title: "Hardware, Cables & Sanitary",
    img: hardware,
  },
  {
    id: 16,
    title: "Used Products",
    img: usedproducts,
  },
];

const MainCategoryView = () => {
  const [allCategory, setAllCategory] = useState(CategoryData);

  return (
    <>
      <div className="categoryView-section">
        <div className="categoryView-container">
          <div className="category_content">
            {allCategory.map((category) => (
              <MainCategoryViewCard key={category.id} category={category}/>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainCategoryView;
