import {combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// import ProductReducers from './Reducers/ProductReducers';
// import CategoryReducers from './Reducers/CategoryReducers';
import CartReducers from './Reducers/CartReducers';

const persistConfig = {
  key: 'root',
  storage,
}
const rootReducer = combineReducers({
  // categories: CategoryReducers,
  // products: ProductReducers,
  Cart: CartReducers
})
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, composeWithDevTools());

export const persistor = persistStore(store);

export default store;