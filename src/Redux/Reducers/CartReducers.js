// const initialState = {
//   Cart : []
// }
const CartReducer = (state = [], action) => {

  switch(action.type){
    case 'ADD_TO_CART': {
      return [...state, action.payload]

      // const newState = {
      //   ...state,
      //   Cart : [...state.Cart, action.payload]
      // }
      // return newState
    }
    case 'REMOVE_FROM_CART': {
      const newState = state.filter(item => item.product_id !== action.payload)
      // const newState = state.filter(item => item)
      // const newCartState = newState.filter(item => item.product_id !== action.payload)
      return newState;
    }
    case 'CLEAR_CART': {
      return [];
    }
    
    default : return state
  }
}

export default CartReducer;



// import {
//   ADD_TO_CART,
//   REMOVE_FROM_CART,
//   CLEAR_CART
// } from "../Constants/CartConstants"


// const CartReducers = (state = { cartItems: [] }, action) => {

//   switch(action.type){
//     case 'ADD_TO_CART': 
//     const item = action.payload;
//     const isItemExist = state.cartItems.find(i => i.product === item.product);

//     if(isItemExist){
//       return {
//         ...state, 
//         cartItems : state.cartItems.map(i => i.product === isItemExist.product ? item:i)
//       };
//     }else{
//       return {
//         ...state,
//         cartItems: [...state.cartItems, item]
//       }
//     }
    
//     default : return state
//   }
// }

// export default CartReducers;

