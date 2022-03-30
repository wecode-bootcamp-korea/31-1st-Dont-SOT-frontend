import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './MenuList.scss';

const MenuList = () => {
  const [menu, setMenu] = useState([]);

  const fetchData = () => {
    async function fetchAndSetMenu() {
      const response = await fetch('/data/menuData.json');
      const data = await response.json();
      setMenu(data);
    }
    fetchAndSetMenu();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="menuListWrap">
      <article className="listWrap">
        <div className="header">
          <p className="cateTitle">신메뉴/행사</p>
          <h3 className="cateTitleItem">행사</h3>
        </div>
        <ul className="menulistBox">
          {menu.map(data => {
            return (
              <Card
                key={data.id}
                id={data.id}
                menuName={data.menuName}
                image={data.image}
                price={data.price}
              />
            );
          })}
        </ul>
      </article>
    </section>
  );
};

export default MenuList;
