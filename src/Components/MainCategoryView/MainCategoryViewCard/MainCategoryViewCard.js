import React from "react";
import { useNavigate } from "react-router-dom";

const MainCategoryViewCard = (props) => {
  const { img, title, id } = props.category;
  const navigate = useNavigate()

  const handleSubCategoryView = (id) =>{

    if(id === 1){
      navigate('/islamic')
    }
    if(id === 2){
      navigate('/grocery')
    }
    if(id === 3){
      navigate('/fashion')
    }
    if(id === 4){
      navigate('/baby-care')
    }
  }

  return (
    <>
      <div onClick={(e) => handleSubCategoryView(id)} className="category_card_content">
        <div className="card">
        <div class="card-body">
          <img src={img} class="card-img-top" alt="" />
        </div>
        <div class="card-footer">{title}</div>
        </div>
      </div>
    </>
  );
};

export default MainCategoryViewCard;
