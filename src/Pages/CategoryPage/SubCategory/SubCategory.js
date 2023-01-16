import React from "react";
import { Link, useParams } from "react-router-dom";
import SubCategoryCard from './../../../Components/Cards/SubCategoryCard/SubCategoryCard';

const SubCategory = ({allCategory}) => {
  const {slug} = useParams();
  // console.log(slug);
  const subCategories = allCategory.find(item => item.slug === slug);
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
