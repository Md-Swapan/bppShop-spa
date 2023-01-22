import React from "react";
import { useSelector } from "react-redux";
import './Cart.css'
// import CartDetailsView from "./CartDetailsView/CartDetailsView";

const Cart = () => {
  const cartItems = useSelector((state) => {
    console.log(state?.Cart)
    return state?.Cart;
  });

  const CartDetailsViewHandler = () => {
    const cartDetailsViewContainer = document.querySelector(".cartDetailsView-container");
    cartDetailsViewContainer.style.display = "block";
    cartDetailsViewContainer.style.transform = "translateX(0px)";
    document.querySelector(".cart").style.display =
      "none";
  };

  return (
    <>
      <div onClick={CartDetailsViewHandler} className="cart">
        <div>
          <i className="bi bi-cart-plus"></i>
          <br />
          <span>{cartItems?.length} Items</span>
        </div>
        <div className="cartTotalPrice">
          <small>৳{" "}
            {`${cartItems?.reduce(
              (acc, item) => acc + item?.quantity * item?.product?.unit_price,
              0
            )}`}</small>
        </div>
      </div>
    </>
  );
};

export default Cart;
