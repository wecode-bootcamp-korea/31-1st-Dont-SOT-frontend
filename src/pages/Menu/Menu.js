import React from 'react';
import Aside from './Aside/Aside';
import MenuList from './MenuList/MenuList';
import '../Menu/Menu.scss';

const Menu = () => {
  return (
    <>
      <div className="contMenu">
        <section className="contMenuWrap inner">
          <div className="titleBox">
            <h2 className="title">한솥 메뉴</h2>
            <div className="tabWrap">
              <ul className="tabMenu">
                <li>
                  <a href="#none" className="viewAll">
                    전체메뉴
                  </a>
                </li>
                <li>
                  <a href="#none" className="keyword">
                    추천 키워드
                  </a>
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

export default Menu;
