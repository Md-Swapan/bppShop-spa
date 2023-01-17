import React from 'react';
import './Cart.css'
import { useSelector } from 'react-redux';

const Cart = () => {
  const cartItemsLength = useSelector((state) => {
    return state.Cart?.length
  })
  return (
    <div className='cart'>
      <span>cartItems: {cartItemsLength}</span>
    </div>
  );
};

export default Cart;