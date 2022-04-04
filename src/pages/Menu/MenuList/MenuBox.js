import React, { useEffect, useState } from 'react';
import Card from '../Components/Card/Card';
import { useLocation } from 'react-router-dom';

const MenuBox = props => {
  const [category, setCategory] = useState([]);
  const [product, setProduct] = useState([]);

  const location = useLocation();

  const fetchData = () => {
    async function fetchAndSetCategory() {
      const response = await fetch(
        `http://10.58.3.192:8000/products${location.search}`
      );
      const data = await response.json();
      setCategory(data.results[0].category);
      setProduct(data.results[0].products);
    }
    fetchAndSetCategory();
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  return (
    <article className="listWrap">
      {category &&
        category.map(data => {
          return (
            <div key={data.id}>
              <div className="header">
                <p className="cateTitle">{data.name}</p>
                <h3 className="cateTitleItem">{data.name}</h3>
              </div>
              <ul className="menulistBox">
                <Card product={product} />
              </ul>
            </div>
          );
        })}
    </article>
  );
};

export default MenuBox;
