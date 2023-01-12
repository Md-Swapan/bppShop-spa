import React from "react";
import { useNavigate } from "react-router-dom";

const CategoryCard = (props) => {
  const { img, title, id, path } = props.category;
  const navigate = useNavigate()

  const handleSubCategoryView = (id) =>{
    if(id){
      navigate(`/${path}`)
    }
  }

  return (
    <>
      <div onClick={() => handleSubCategoryView(id)} className="category_card_content">
        <div className="card">
        <div className="card-body">
          <img src={img} className="card-img-top" alt="" />
        </div>
        <div className="card-footer">{title}</div>
        </div>
      </div>
    </>
  );
};

export default CategoryCard;
