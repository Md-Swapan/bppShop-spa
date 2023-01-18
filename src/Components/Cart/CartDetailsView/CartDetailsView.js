import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./CartDetailsView.css";
import defaultProImg from "../../../Assets/Images/defaultImg.jpg";
import { RemoveFromCart } from "../../../Redux/Actions/CartAction";

const CartDetailsView = () => {
  const [quantityCount, setQuantityCount] = useState(1);

  const cartItems = useSelector((state) => {
    console.log(state.cart);
    return state.Cart;
  });

  const dispatch = useDispatch();

  return (
    <div className="cartDetailsView-container">
      <div className="cartDetailsView-header">
        <h4>My Cart</h4>
        <p>
          <i class="bi bi-x-lg"></i>
        </p>
      </div>
      <div className="cartDetailsView-content">
        {cartItems.map((item) => (
          <div className="cartDetails">
            <img
              src={!item.images[0] ? item.images[0] : defaultProImg}
              alt=""
            />
            <div className="cart-content-qty-container">
              <div className="d-flex justify-content-between">
                <small>{item.name.toString().substring(0, 15)}...</small>
                <span
                  onClick={() => dispatch(RemoveFromCart(item.product_id))}
                  className="cartItemDeleteBtn"
                >
                  <i class="bi bi-trash3"></i>
                </span>
              </div>
              <div className="cart-content">
                <span>৳ {item.unit_price}</span>

                <div className="cartTitleQty">
                  <small> Qty: </small>
                  <div className="quantity-set">
                    <span
                      onClick={() =>
                        setQuantityCount(
                          quantityCount > 1 ? quantityCount - 1 : quantityCount
                        )
                      }
                      className="minusBtn"
                    >
                      -
                    </span>
                    <span className="qtyCount-number">{quantityCount}</span>
                    <span
                      onClick={() => setQuantityCount(quantityCount + 1)}
                      className="plusBtn"
                    >
                      +
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-total-container">
        <h4>Total: </h4>
      </div>
    </div>
  );
};

export default CartDetailsView;
