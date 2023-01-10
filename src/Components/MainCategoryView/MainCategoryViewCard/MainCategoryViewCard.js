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
    if(id === 5){
      navigate('/cosmetics')
    }
    if(id === 6){
      navigate('/shoes')
    }
    if(id === 7){
      navigate('/eye-care')
    }
    if(id === 8){
      navigate('/sports')
    }
    if(id === 9){
      navigate('/watch')
    }
    if(id === 10){
      navigate('/electronics')
    }
    if(id === 11){
      navigate('/furniture')
    }
    if(id === 12){
      navigate('/pharmacy')
    }
    if(id === 13){
      navigate('/home-appliance-decorate')
    }
    if(id === 14){
      navigate('/vehicle')
    }
    if(id === 15){
      navigate('/hardware-cables-sanitary')
    }
    if(id === 16){
      navigate('/used-product')
    }
  }

  return (
    <>
      <div onClick={() => handleSubCategoryView(id)} className="category_card_content">
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
