import React, { useEffect, useState } from 'react';
import MenuBox from './MenuBox';
import './MenuList.scss';
import { useLocation } from 'react-router-dom';

const MenuList = props => {
  const [category, setCategory] = useState([]);
  const location = useLocation();

  const fetchData = () => {
    async function fetchAndSetCategory() {
      const response = await fetch(
        `http://10.58.3.192:8000/products${location.search}`
      );
      const data = await response.json();
      setCategory(data.results);
    }
    fetchAndSetCategory();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="menuListWrap">
      <MenuBox category={category} />
    </section>
  );
};

export default MenuList;
