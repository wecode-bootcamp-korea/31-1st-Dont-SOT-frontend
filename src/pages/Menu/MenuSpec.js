import React from 'react';
import Aside from './Components/Aside/Aside';
import MenuList from './MenuList/MenuList';
import { Link } from 'react-router-dom';
import './Products.scss';

const MenuSpec = () => {
  return (
    <>
      <header className="inner">
        <div>nav</div>
      </header>
      <div className="contMenu">
        <section className="contMenuWrap inner">
          <div className="titleBox">
            <h2 className="title">한솥 스팩 메뉴</h2>
            <div className="tabWrap">
              <ul className="tabMenu">
                <li>
                  <Link to="#none" className="viewAll">
                    전체메뉴
                  </Link>
                </li>
                <li>
                  <Link to="#none" className="keyword">
                    추천
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="menuBox">
            <Aside />
            <MenuList />
          </div>
        </section>
      </div>
    </>
  );
};

export default MenuSpec;
