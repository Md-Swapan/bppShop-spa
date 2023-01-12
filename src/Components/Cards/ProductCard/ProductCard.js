import React from 'react';

const ProductCard = (props) => {
  const {id, title, image} = props.product;
  return (
    <>
     <div
      className="category_card_content"
    >
      <div className="card">
        <div className="card-body">
          <img src={image} className="card-img-top" alt="" />
        </div>
        <div className="card-footer">{title}</div>
      </div>
    </div> 
    </>
  );
};

export default ProductCard;