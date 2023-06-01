/* eslint-disable max-len */
/* eslint-disable comma-dangle */
import { createSlice } from '@reduxjs/toolkit';

export const user = createSlice({
  // createSlice is a function that returns an object with two keys: reducer and actions
  name: 'user', // name is the name of the reducer
  initialState: {
    // initialState is the initial state of the reducer
    username: null, // this is the same as in backend
    userId: null,
    accessToken: null,
    error: null,
  },
  reducers: {
    // reducers are functions that can change the state
    setUsername: (store, action) => {
      // store is the current state and action is the payload that we send
      store.username = action.payload; // payload is the data that we send with the action when we call the action in the component
    },
    setUserId: (store, action) => {
      store.userId = action.payload;
    },
    setAccessToken: (store, action) => {
      store.accessToken = action.payload;
    },
    setError: (store, action) => {
      store.error = action.payload;
    },
  },
});
