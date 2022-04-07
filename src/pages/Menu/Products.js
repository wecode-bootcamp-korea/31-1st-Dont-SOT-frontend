import React from 'react';
import Aside from './Components/Aside/Aside';
import MenuBox from './Components/MenuBox/MenuBox';
import './Products.scss';

const MenuSpec = () => {
  return (
    <div className="contMenu">
      <section className="contMenuWrap inner">
        <div className="titleBox">
          <h2 className="title">한솥 메뉴</h2>
          <div className="tabWrap">
            <ul className="tabMenu">
              <li>전체메뉴</li>
            </ul>
          </div>
        </div>
        <div className="menuSection">
          <Aside />
          <section className="menuListWrap">
            <MenuBox />
          </section>
        </div>
      </section>
    </div>
  );
};

export default MenuSpec;
