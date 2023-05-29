import React from 'react';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main } from './components/Main';
import { Login } from './components/Login';
import { AllWine } from './components/AllWine';
import { PageNotFound } from './components/PageNotFound';

export const App = () => {
  return (
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
  );
};
