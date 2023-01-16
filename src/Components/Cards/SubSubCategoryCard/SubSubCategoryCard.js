import React from 'react';
import { useNavigate } from 'react-router-dom';
import defaultProImg from '../../../Assets/Images/default-avatar.jpg';

const SubSubCategoryCard = ({SubSubcategory}) => {
  // console.log(SubSubcategory);
  const navigate = useNavigate();

  const { id, name, slug,img } = SubSubcategory;
  // console.log(slug);

  const handleProductView = (id,subSubSlug) => {
    console.log(id)
    if (id) {
      navigate(slug);
    }
  }

  return (
    <div
      onClick={() => handleProductView(id,slug)}
      className="category_card_content"
    >
      <div className="card">
        <div className="card-body">
        {img? <img src={img} className="card-img-top" alt="" /> : <img src={defaultProImg} className="card-img-top" alt="" />}
        </div>
        <div className="card-footer">{name}</div>
      </div>
    </div>
  );
};

export default SubSubCategoryCard;