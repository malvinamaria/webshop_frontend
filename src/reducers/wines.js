/* eslint-disable max-len */
/* eslint-disable comma-dangle */
import { createSlice } from '@reduxjs/toolkit';

export const wines = createSlice({
  // createSlice is a function that returns an object with two keys: reducer and actions
  name: 'wines', // name is the name of the reducer
  initialState: {
    items: [],
    error: null,
  },
  reducers: {
    // reducers are functions that can change the state
    setItems: (store, action) => {
      // store is the current state and action is the payload that we send
      store.username = action.payload; // payload is the data that we send with the action when we call the action in the component
    },
    setError: (store, action) => {
      store.error = action.payload;
    },
  },
});
