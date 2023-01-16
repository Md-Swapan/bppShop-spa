import React from "react";
import { useNavigate} from "react-router-dom";
import defaultProImg from '../../../Assets/Images/default-avatar.jpg'

const SubCategoryCard = ({subcategory}) => {
  // console.log(subcategory);
  const { id, name, img, slug } = subcategory;
  // console.log(slug);

  const navigate = useNavigate();

  const handleSubSubCategoryView = (id,subSlug) => {
    // console.log(id,subSlug);
    if (id) {
      navigate(subSlug);
    }
  };

  return (
    <div
      onClick={() => handleSubSubCategoryView(id,slug)}
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

export default SubCategoryCard;
