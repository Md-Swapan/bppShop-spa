import {combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import CartReducers from './Reducers/CartReducers';
import CategoryReducers from "./Reducers/CategoryReducers";
import PriceVariantReducers from "./Reducers/PriceVariantReducers";

const persistConfig = {
  key: 'root',
  storage,
}
const rootReducer = combineReducers({
  Cart: CartReducers,
  PriceVariant: PriceVariantReducers,
  Category: CategoryReducers

})
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, composeWithDevTools());

export const persistor = persistStore(store);

export default store;



// import { createStore, combineReducers, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
// import CartReducer from "./Reducers/CartReducers";

// const reducer = combineReducers({
//   cart: CartReducer,
// });

// let initialState = {
//   cart: {
//     cartItems: localStorage.getItem("cartItems")
//       ? JSON.parse(localStorage.getItem("cartItems"))
//       : [],
//   },
// };

// const middleware = [thunk];

// const store = createStore(
//   reducer,
//   initialState,
//   composeWithDevTools(applyMiddleware(...middleware))
// );

// export default store;
