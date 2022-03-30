import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Join from './pages/Join/Join';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import Product from './pages/Menu/Components/Product/Product';
import Menu from './pages/Menu/Menu';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/products" element={<Menu />} />
        <Route path="/products/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
