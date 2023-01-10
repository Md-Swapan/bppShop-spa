import React from "react";

const MainCategoryViewCard = (props) => {
  const { img, title } = props.category;
  return (
    <>
      <div className="category_card_content">
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
