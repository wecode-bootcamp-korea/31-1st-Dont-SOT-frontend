import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Card from '../Card/Card';
import API from '../../../../config';
import './MenuBox.scss';

const MenuBox = () => {
  const [category, setCategory] = useState([]);
  const [product, setProduct] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function fetchAndSetCategory() {
      const response = await fetch(`${API.MenuList}${location.search}`);
      const data = await response.json();
      setCategory(data.results[0].category);
      setProduct(data.results[0].products);
    }
    fetchAndSetCategory();
  }, [location.search]);

  return (
    <article className="menuBox">
      {category.map(({ id, name }) => {
        return (
          <div key={id}>
            <div className="header">
              <h3 className="cateTitleItem">{name}</h3>
            </div>
            <Card product={product} />
          </div>
        );
      })}
    </article>
  );
};

export default MenuBox;
