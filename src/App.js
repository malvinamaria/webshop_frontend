/* eslint-disable comma-dangle */
import React from 'react';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { Main } from './components/Main';
import { Login } from './components/Login';
import { AllWine } from './components/AllWine';
import { PageNotFound } from './components/PageNotFound';
import { user } from './reducers/user';
import { wines } from './reducers/wines';

export const App = () => {
  const reducer = combineReducers({
    wines: wines.reducer,
    user: user.reducer,
    // 👇️ add reducers here
  });
  const store = configureStore({ reducer });

  return (
    <Provider store={store}>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />}>
              {' '}
            </Route>
            <Route path="/login" element={<Login />}>
              {' '}
            </Route>
            <Route path="/allWine" element={<AllWine />}>
              {' '}
            </Route>
            {/* 👇️ only match this when no other routes match */}
            <Route path="*" element={<PageNotFound />}>
              {' '}
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
};
