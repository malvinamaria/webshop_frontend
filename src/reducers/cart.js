/* eslint-disable operator-linebreak */
/* eslint-disable comma-dangle */
import { createSlice } from '@reduxjs/toolkit';

export const cart = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.find((i) => i.id === item.id);

      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        state.push(item);
      }
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      return state.filter((item) => item.id !== itemId);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.find((i) => i.id === id);

      if (item) {
        item.quantity = quantity;
      }
    },
    // eslint-disable-next-line no-unused-vars
    clearCart: (state) => {
      return [];
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cart.actions;

export default cart.reducer;
