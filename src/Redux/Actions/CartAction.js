export const addToCart = (payload) => {
  return {
    type: 'ADD_TO_CART',
    payload,
  }
}

export const RemoveFromCart = (payload) => {
  return {
    type: "REMOVE_FROM_CART",
    payload,
  };
};

export const ClearCart = () => {
  return {
    type: "CLEAR_CART",
  };
};




// import {
//   ADD_TO_CART,
//   REMOVE_FROM_CART,
//   CLEAR_CART
// } from "../Constants/CartConstants"
// import axios from 'axios';
// import { baseUrl } from "../../BaseUrl/BaseUrl";


// export const addToCart = (id, quantity) => async(dispatch) => {
//   const {data} = await axios.get(`${baseUrl}/cart/${id}`);

//   dispatch({
//     type: "ADD_TO_CART",
//     payload: {
//       product : data.product.product_id,
//       name: data.product.name,
//       price: data.product.price,
//       Image: data.product.Image,
//       stock: data.product.stock,
//       quantity,
//     }
//   })
  
// };


