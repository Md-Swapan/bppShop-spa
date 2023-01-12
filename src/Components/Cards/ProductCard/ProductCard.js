import React from "react";
import "./ProductCard.css";

const ProductCard = (props) => {
  const { id, title, image, price } = props.product;
  return (
    <>
      <div className="product_card_content">
        <div className=" product-card">
          <div className=" product-card-body">
            <img src={image} className="card-img-top" alt="" />
            <div className="product-card-body-content">
              <small>{title.toString().substring(0, 18)}...</small>
              <br />
              <strong>৳ {price}</strong>
            </div>
            <div className="quickView_AddToCart_overlay">
              <div className="overlayAddToCartBtn">
                <h5>Add <br/> To <br/> Cart</h5>
                <i class="bi bi-cart-plus-fill"></i>
              </div>
              <button><i class="bi bi-eye-fill"></i> <span>Quick View</span></button>
            </div>
          </div>

          <div className="card-footer product-card-footer">
            <button type="">
              <i class="bi bi-cart-plus"></i> Add To Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
