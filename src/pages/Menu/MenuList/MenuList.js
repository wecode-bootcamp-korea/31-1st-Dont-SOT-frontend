import React from 'react';
import Card from '../Card/Card';
import './MenuList.scss';

const MenuList = () => {
  return (
    <section className="menuListWrap">
      <article className="listWrap">
        <div className="header">
          <p className="cateTitle">신메뉴/행사</p>
          <h3 className="cateTitleItem">행사</h3>
        </div>
        <ul className="menulistBox">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </ul>
      </article>
    </section>
  );
};

export default MenuList;
