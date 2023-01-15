import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SubCategoryCard = (props) => {
  const { id, title, img, path } = props.subcategory;

  const location = useLocation();
  const currentPath = location.pathname;

  // const currentPath = location.pathname.split("/")
  // const newPath = currentPath.slice(1,2)
  // console.log(newPath)

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
        <div className="card-footer">{title}</div>
      </div>
    </div>
  );
};

export default SubCategoryCard;
