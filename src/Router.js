import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Join from './pages/Join/Join';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import Menu from './pages/Menu/Menu';
import Cart from './pages/Cart/Cart';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
