import React, { useState, useEffect } from 'react';
import CategoryList from '../CategoryList/CategoryList';

import './Aside.scss';
const Aside = () => {
  const [category, setCategory] = useState([]);

  const fetchData = () => {
    async function fetchAndSetCategory() {
      const response = await fetch('/data/categoryData.json');
      const data = await response.json();
      setCategory(data);
    }
    fetchAndSetCategory();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <aside className="leftWrap">
      <div className="lnb">
        <div className="lnbInner">
          <ul className="categoryWarp">
            {category.map(category => {
              return (
                <li className="category" key={category.id}>
                  <div className="categoryTitle">{category.categoryName}</div>
                  <ul className="childWrap">
                    <CategoryList categoryList={category.categoryList} />
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
