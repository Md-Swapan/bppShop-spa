import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const SubSubCategoryCard = (props) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();

  const { id, title, img, path } = props.SubSubcategory;

  const handleProductView = (id) => {
    if (id) {
      navigate(currentPath + `/${path}`);
    }
  }

  return (
    <div
      onClick={() => handleProductView(id)}
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

export default SubSubCategoryCard;