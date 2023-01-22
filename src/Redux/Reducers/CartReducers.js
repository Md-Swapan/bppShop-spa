// const initialState = {
//   Cart : []
// }

const CartReducer = (state = { Cart: [] }, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      return [...state, action.payload];
      
      // const item = action.payload;

      // const isItemExist = state.find((i) => i.product === item.product);

      // if (isItemExist) {
      //   return {
      //     ...state,
      //     Cart: state.map((i) =>
      //       i.product === isItemExist.product ? item : i
      //     ),
      //   };
      // } else {
        
      //   return {
      //     ...state,
      //     Cart: [...state, item],
      //   };
      // }

    }

    case "REMOVE_FROM_CART": 
    //   ...state, // return {
    //   cartItems: state.Cart.filter((item) => item.id !== action.payload),
    // };
    {
      const newState = state.filter(
        (item) => item.product.id !== action.payload
      );
      return newState;
    }
    case "CLEAR_CART": {
      return [];
    }

    default:
      return state;
  }
};


// export const CartReducer = (
//   state = { cartItems: [], shippingInfo: {} },
//   action
// ) => {
//   switch (action.type) {
//     case 'ADD_TO_CART':
//       const item = action.payload;

//       const isItemExist = state.cartItems.find(
//         (i) => i.product === item.product
//       );

//       if (isItemExist) {
//         return {
//           ...state,
//           cartItems: state.cartItems.map((i) =>
//             i.product === isItemExist.product ? item : i
//           ),
//         };
//       } else {
//         return {
//           ...state,
//           cartItems: [...state.cartItems, item],
//         };
//       }

//     case 'REMOVE_CART_ITEM':
//       return {
//         ...state,
//         cartItems: state.cartItems.filter((i) => i.product !== action.payload),
//       };

//     case 'SAVE_SHIPPING_INFO':
//       return {
//         ...state,
//         shippingInfo: action.payload,
//       };

//     default:
//       return state;
//   }
// };

export default CartReducer;
