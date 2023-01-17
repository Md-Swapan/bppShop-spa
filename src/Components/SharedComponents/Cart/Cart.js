import React from 'react';
import './Cart.css';

const Cart = () => {
    return (
        <>
            <div className='cart_container_section'>
                <div className='cart_item_containt'>
                    <div className='cart_icon'>icon</div>
                    <div className='cart_icon'>item</div>
                </div>
                <div className='cart_total_amount'>total</div>
            </div>
        </>
    );
};

export default Cart;