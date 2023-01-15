import React from "react";
import { useNavigate } from "react-router-dom";
import defaultProImg from '../../../Assets/Images/defaultImg.jpg'

const CategoryCard = (props) => {
  // console.log(props)
  const { img, name, id, slug } = props.category;
  const navigate = useNavigate()

  const handleSubCategoryView = (id) =>{
    
    if(id){
      navigate(`/${slug}`)
    }
  }

  return (
    <>
      <div onClick={() => handleSubCategoryView(id)} className="category_card_content">
        <div className="card">
        <div className="card-body">
          {img? <img src={img} className="card-img-top" alt="" /> : <img src={defaultProImg} className="card-img-top" alt="" />}
        </div>
        <div className="card-footer">{name}</div>
        </div>
      </div>
    </>
  );
};

export default CategoryCard;
