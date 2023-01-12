import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import jaynamaz from "../../../Assets/Images/subSubCategoryImg/image 68.png";
import tupi from "../../../Assets/Images/subSubCategoryImg/image 69.png";
import pagri from "../../../Assets/Images/subSubCategoryImg/image 68-1.png";
import tasbih from "../../../Assets/Images/subSubCategoryImg/image 71.png";
import meswak from "../../../Assets/Images/subSubCategoryImg/image 72.png";
import prayerStand from "../../../Assets/Images/subSubCategoryImg/download (18).png";
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
  const {id, subId} = useParams();
  // const location = useLocation();
  // const currentPath = location.pathname;
  // const navigate = useNavigate();

  const [subSubCategories, setSubSubCategories] = useState(SubCategoryData);

  return (
    <>
     <div className="categoryView-section">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>

            <li class="breadcrumb-item active" aria-current="page">
              {id? <Link to="/:id" >{id}</Link> : <Link to="" >{id}</Link>}
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              
              {subId}
            </li>
          </ol>
        </nav>

        <div className="categoryView-container">
          <div className="category_content">
            {subSubCategories.map((SubSubcategory) => (
              <SubSubCategoryCard
                key={SubSubcategory.id}
                SubSubcategory={SubSubcategory}
              />
            ))}
          </div>
        </div>
      </div> 
    </>
  );
};

export default SubSubCategory;