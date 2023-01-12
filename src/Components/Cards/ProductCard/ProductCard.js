import React from 'react';
import './ProductCard.css';

const ProductCard = (props) => {
  const {id, title, image} = props.product;
  return (
    <>
     <div
      className="product_card_content"
    >
      <div className="card product-card">
        <div className="card-body product-card-body">
          <img src={image} className="card-img-top" alt="" />
        </div>
        <div className="card-footer product-card-footer">{title}</div>
      </div>
    </div> 
    </>
  );
};

export default ProductCard;