import React from "react";
import { Link, useParams } from "react-router-dom";
import salahAccessories from "../../../Assets/Images/subCategoryImg/image 59.png";
import modestDress from "../../../Assets/Images/subCategoryImg/image 60.png";
import attarHalal from "../../../Assets/Images/subCategoryImg/image 61.png";
import decorativeItems from "../../../Assets/Images/subCategoryImg/image 62.png";
import islamicBooks from "../../../Assets/Images/subCategoryImg/image 63.png";
import otherItems from "../../../Assets/Images/subCategoryImg/image 64.png";
import SubCategoryCard from './../../../Components/Cards/SubCategoryCard/SubCategoryCard';

const SubCategoryData = [
  {
    id: 1,
    path: "salah-accessories",
    title: "Salah Accessories",
    img: salahAccessories,
  },
  {
    id: 2,
    path: "modest-dress",
    title: "Modest Dress",
    img: modestDress,
  },
  {
    id: 3,
    path: "attar-halal-fragrance",
    title: "Attar & Halal Fragrance",
    img: attarHalal,
  },
  {
    id: 4,
    path: "decorative-items",
    title: "Decorative Items",
    img: decorativeItems,
  },
  {
    id: 5,
    path: "islamic-books",
    title: "Islamic Books",
    img: islamicBooks,
  },
  {
    id: 6,
    path: "other-items",
    title: "Other Items",
    img: otherItems,
  },
];

const SubCategory = ({allCategory}) => {
  //console.log(allCategory);
  const {slug} = useParams();
  var subCategories = allCategory.find(item => item.slug === slug);
  // console.log(subCategories);

 
  return (
    <>
      <div className="categoryView-section">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb my-4">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {slug}
            </li>
          </ol>
        </nav>

        <div className="categoryView-container">
          <div className="category_content">
            {subCategories?.childes?.map((subcategory) => (
              <SubCategoryCard
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

export default SubCategory;
