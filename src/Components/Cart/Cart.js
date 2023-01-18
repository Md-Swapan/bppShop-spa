import React from "react";
import "./Cart.css";
import { useSelector } from "react-redux";
import CartDetailsView from "./CartDetailsView/CartDetailsView";

const Cart = () => {
  const cartItemsLength = useSelector((state) => {
    return state.Cart?.length;
  });

  // const cartTotalPrice = useSelector((state) => {
  //   const price = (state.Cart.map(item => {
  //     return item.unit_price
  //   }));
  //   console.log(price)

  // });

  // const cartItemCount = useSelector((state) => {
  //   let quantityCount = 0;

  //   state.cart.forEach((item) => {
  //     quantityCount += item.quantity;
  //   });

  //   return quantityCount;
  // })

  // console.log(cartItemCount)

  // const cartTotalPrice = useSelector((state) => {
  //   let total = 0;

  //   state.Cart.forEach((item) => {
  //     total += item.unit_price * cartItemCount;
  //   });

  //   return total;
  // })

  const CartDetailsViewHandler = () => {
    document.querySelector(".cartDetailsView-container").style.display =
      "block";
    document.querySelector(".cart").style.display =
      "none";
  };

  return (
    <>
      <div onClick={CartDetailsViewHandler} className="cart">
        <div>
          <i className="bi bi-cart-plus"></i>
          <br />
          <span>{cartItemsLength} Items</span>
        </div>
        <div className="cartTotalPrice">
          {/* <small>৳ {cartTotalPrice}</small> */}
        </div>
      </div>
    </>
  );
};

export default Cart;
