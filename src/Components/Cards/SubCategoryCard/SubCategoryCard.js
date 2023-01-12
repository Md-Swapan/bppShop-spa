import React from "react";
import { Navigate } from "react-router-dom";

const SubCategoryCard = (props) => {
  const { id, title, img, path } = props.subcategory;

  const handleSubCategoryView = (id) =>{
    if(id){
      Navigate(`/${path}`)
    }
  }


  return (
    <div
      onClick={() => handleSubCategoryView(id)}
      className="category_card_content"
    >
      <div className="card">
        <div className="card-body">
          <img src={img} className="card-img-top" alt="" />
        </div>
        <div className="card-footer">{title}</div>
      </div>
    </div>
  );
};

export default SubCategoryCard;
