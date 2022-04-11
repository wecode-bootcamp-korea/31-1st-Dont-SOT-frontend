import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Card from '../Card/Card';
import Title from './Title';
import API from '../../../../config';
import './MenuBox.scss';

const MenuBox = () => {
  const [product, setProduct] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function fetchAndSetCategory() {
      const response = await fetch(`${API.MenuList}${location.search}`);
      const data = await response.json();
      setProduct(data.results);
    }
    fetchAndSetCategory();
  }, [location.search]);

  return (
    <article className="menuBox">
      <Title />
      <Card product={product} />
    </article>
  );
};

export default MenuBox;
