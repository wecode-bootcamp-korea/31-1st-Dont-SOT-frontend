import React, { useEffect, useState } from 'react';
import MenuBox from './MenuBox';
import './MenuList.scss';

const MenuList = props => {
  const [category, setCategory] = useState([]);

  const fetchData = () => {
    async function fetchAndSetCategory() {
      const response = await fetch('/data/menuData.json');
      const data = await response.json();
      setCategory(data);
    }
    fetchAndSetCategory();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="menuListWrap">
      {category &&
        category.map(data => {
          return (
            <MenuBox
              key={data.id}
              id={data.id}
              category={data.category}
              categoryList={data.categoryList}
            />
          );
        })}
    </section>
  );
};

export default MenuList;
