// // src/store.js
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './ProductsSlice';
import cartReducer, { getTotals } from './cartSlice';
const store = configureStore({
  reducer: {
    products: productsReducer,
    cart:cartReducer,
  },
});
store.dispatch(getTotals())

export default store;
