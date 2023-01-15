import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SubCategoryCard = (props) => {
  const { id, name, img, path } = props.subcategory;

  const location = useLocation();
  const currentPath = location.pathname;

  const navigate = useNavigate();

  const handleSubSubCategoryView = (id) => {
    if (id) {
      navigate(currentPath + `/${path}`);
    }
  };

  return (
    <div
      onClick={() => handleSubSubCategoryView(id)}
      className="category_card_content"
    >
      <div className="card">
        <div className="card-body">
          <img src={img} className="card-img-top" alt="" />
        </div>
        <div className="card-footer">{name}</div>
      </div>
    </div>
  );
};

export default SubCategoryCard;
