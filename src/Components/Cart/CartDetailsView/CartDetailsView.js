import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./CartDetailsView.css";
import defaultProImg from "../../../Assets/Images/defaultImg.jpg";
import { removeItemsFromCart } from "../../../Redux/Actions/CartAction";
import { Link } from "react-router-dom";
import { addItemsToCart } from './../../../Redux/Actions/CartAction';

const CartDetailsView = () => {
  const [quantityCount, setQuantityCount] = useState(1);

  const cartItems = useSelector((state) => {
    return state.Cart;

  });

  

  const dispatch = useDispatch();

  const CartDetailsCloseHandler = () => {
    document.querySelector(".cartDetailsView-container").style.display = "none";
    document.querySelector(".cart").style.display = "block";
  };

  // const increaseQuantity = (id, quantity) => {
  //   const newQty = quantity + 1;
  //   // if (stock <= quantity) {
  //   //   return;
  //   // }
  //   dispatch(addItemsToCart(id, newQty));
  // };

  // const decreaseQuantity = (id, quantity) => {
  //   const newQty = quantity - 1;
  //   // if (1 >= quantity) {
  //   //   return;
  //   // }
  //   dispatch(addItemsToCart(id, newQty));
  // };
  
  return (
    <div className="cartDetailsView-container">
      <div className="cartDetailsView-header">
        <h4>My Cart</h4>
        <p onClick={CartDetailsCloseHandler}>
          <i class="bi bi-x-lg"></i>
        </p>
      </div>
      <div className="cartDetailsView-content">
        {cartItems.length < 1 ? (
          <h4 className="mt-4 text-center">You have no items in your cart!</h4>
        ) : (
          cartItems.map((item) => (
            <div className="cartDetails">
              <img src={defaultProImg} alt="" />
              <div className="cart-content-qty-container">
                <div className="d-flex justify-content-between">
                  <small>
                    {item?.product?.name?.toString().substring(0, 15)}...
                  </small>
                  <span
                    onClick={() =>
                      dispatch(removeItemsFromCart(item?.product?.id))
                    }
                    className="cartItemDeleteBtn"
                  >
                    <i class="bi bi-trash3"></i>
                  </span>
                </div>
                <div className="cart-content">
                  <span>
                    ??? {item?.product?.unit_price} /{" "}
                    {item?.product?.choice_options?.map((list) => (
                      <>{list?.title} : </>
                    ))}
                  </span>

                  <div className="cartTitleQty">
                    <small> Qty: </small>
                    <div className="quantity-set">
                      <span
                        onClick={() =>
                          setQuantityCount(
                            quantityCount > 1
                              ? quantityCount - 1
                              : quantityCount
                          )
                        }

                        // onClick={() =>
                        //   decreaseQuantity(item.product, item.quantity)
                        // }
                        className="minusBtn"
                      >
                        -
                      </span>
                      <span className="qtyCount-number">{setQuantityCount}</span>
                      <span
                        onClick={() => setQuantityCount(quantityCount + 1)}

                        // onClick={() =>
                        //   increaseQuantity(
                        //     item.product,
                        //     item.quantity
                        //   )
                        // }
                        className="plusBtn"
                      >
                        +
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="cart-total-container">
        <div className="d-flex justify-content-between">
          <h6>Grand Total: </h6>
          <h6>
            ???{" "}
            {`${cartItems?.reduce(
              (acc, item) => acc + item?.quantity * item?.product?.unit_price * quantityCount,
              0
            )}`}
          </h6>
        </div>
        <Link to="/shipping-details">
          <button onClick={CartDetailsCloseHandler} type="">
            Place Order
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartDetailsView;
