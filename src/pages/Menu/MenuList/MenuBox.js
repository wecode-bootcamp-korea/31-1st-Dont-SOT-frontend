import React, { useEffect, useState } from 'react';
import Card from '../Components/Card/Card';
import { useLocation } from 'react-router-dom';
import API from '../../../config';

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
    <article className="listWrap">
      {category.map(data => {
        return (
          <div key={data.id}>
            <div className="header">
              <h3 className="cateTitleItem">{data.name}</h3>
            </div>
            <Card product={product} />
          </div>
        );
      })}
    </article>
  );
};

export default MenuBox;
