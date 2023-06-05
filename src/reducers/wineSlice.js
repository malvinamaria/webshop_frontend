/* eslint-disable comma-dangle */
import { createSlice } from '@reduxjs/toolkit';

export const wineSlice = createSlice({
  name: 'wineSlice',
  initialState: {
    items: [],
    // error: null,
  },
  reducers: {
    setWines: (store, action) => {
      store.items = action.payload;
    },
    // setError: (store, action) => {
    //   store.error = action.payload;
    // },
  },
});
