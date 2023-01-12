import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import jaynamaz from "../../../Assets/Images/subCategoryImg/image 59.png";
import tupi from "../../../Assets/Images/subCategoryImg/image 60.png";
import pagri from "../../../Assets/Images/subCategoryImg/image 61.png";
import tasbih from "../../../Assets/Images/subCategoryImg/image 62.png";
import meswak from "../../../Assets/Images/subCategoryImg/image 63.png";
import prayerStand from "../../../Assets/Images/subCategoryImg/image 64.png";
import SubSubCategoryCard from './../../../Components/Cards/SubSubCategoryCard/SubSubCategoryCard';


const SubCategoryData = [
  {
    id: 1,
    path: "jaynamaz",
    title: "Jaynamaz",
    img: jaynamaz,
  },
  {
    id: 2,
    path: "tupi",
    title: "Tupi",
    img: tupi,
  },
  {
    id: 3,
    path: "pagri",
    title: "Pagri",
    img: pagri,
  },
  {
    id: 4,
    path: "tasbih",
    title: "Tasbih",
    img: tasbih,
  },
  {
    id: 5,
    path: "meswak",
    title: "Meswak",
    img: meswak,
  },
  {
    id: 6,
    path: "prayer-stand",
    title: "Prayer Stand",
    img: prayerStand,
  },
];


const SubSubCategory = () => {
  const { id } = useParams();

  const [subCategories, setSubCategories] = useState(SubCategoryData);

  return (
    <>
     <div className="categoryView-section">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              {id}
            </li>
          </ol>
        </nav>

        <div className="categoryView-container">
          <div className="category_content">
            {subCategories.map((subcategory) => (
              <SubSubCategoryCard
                key={subcategory.id}
                subcategory={subcategory}
              />
            ))}
          </div>
        </div>
      </div> 
    </>
  );
};

export default SubSubCategory;