import React from 'react';
import { Link, useParams } from 'react-router-dom';
import SubSubCategoryCard from './../../../Components/Cards/SubSubCategoryCard/SubSubCategoryCard';



const SubSubCategory = ({allCategory}) => {
  // console.log(allCategory);
  const {slug,subSlug}=useParams();
  // console.log(slug,subSlug);
  
  const subCategories = allCategory.find(item => item.slug === slug);
  // console.log(subCategories?.childes);

  const subSubCategories=subCategories?.childes?.find(item => item.slug === subSlug);
  // console.log(subSubCategories?.childes);

  return (
    <>
     <div className="categoryView-section">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb my-4">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>

            <li className="breadcrumb-item active" aria-current="page">
              <Link to={`/${slug}`} >{slug}</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {subSlug}
            </li>
          </ol>
        </nav>

        <div className="categoryView-container">
          <div className="category_content">
            {subSubCategories?.childes?.map((SubSubcategory) => (
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