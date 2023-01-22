// import axios from 'axios';
// import { baseUrl } from "../../BaseUrl/BaseUrl";

export const addItemsToCart = (product, quantity) => {
  return {
    type: 'ADD_TO_CART',
    payload : {
      product,
      quantity
    },
  }
}

export const removeItemsFromCart = (payload) => {
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


// Add to Cart
// export const addItemsToCart = (id, quantity) => async (dispatch, getState) => {
//   const {data} = await axios.get(`${baseUrl}/cart/${id}`);

//   dispatch({
//     type: 'ADD_TO_CART',
//     payload: {
//       product: data.product._id,
//       name: data.product.name,
//       price: data.product.price,
//       image: data.product.images[0].url,
//       stock: data.product.Stock,
//       quantity,
//     },
//   });

//   localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
// };

// // REMOVE FROM CART
// export const removeItemsFromCart = (id) => async (dispatch, getState) => {
//   dispatch({
//     type: 'REMOVE_FROM_CART',
//     payload: id,
//   });

//   localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
// };


