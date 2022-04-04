import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Join from './pages/Join/Join';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import ProductSpec from './pages/Menu/Components/ProductSpec/ProductSpec';
import MenuSpec from './pages/Menu/MenuSpec';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        {/* <Route path="/products/all" element={<Products />} /> */}
        <Route path="/products/all/category_id=:id" element={<MenuSpec />} />
        <Route path="/products/detail/:id" element={<ProductSpec />} />
        {/* <Route path="/products/all" element={<MenuSpec />} /> */}
        <Route path="/products" element={<MenuSpec />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
