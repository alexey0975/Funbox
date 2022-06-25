import { configureStore, createSlice } from '@reduxjs/toolkit';
import { IProduct } from './App';

interface ICartState {
  id: number,
}

const productsSlice = createSlice({
  name: 'products',
  initialState: [] as IProduct[],
  reducers: {
    getProducts(state, action) {
      return action.payload;
    }
  }
})

const cartSlice = createSlice({
  name: 'cart',
  initialState: [] as ICartState[],
  reducers: {
    addProducts(state, action) {
      state.push({
        id: action.payload,
      });
    },
    removeProducts(state, action) {
      return state.filter(product => product.id !== action.payload);
    }
  }
})

export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    cart: cartSlice.reducer,
  },
})

export const { getProducts } = productsSlice.actions;
export const { addProducts, removeProducts } = cartSlice.actions;
export type RootState = ReturnType<typeof store.getState>;



