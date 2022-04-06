import React from 'react';
import CategoryList from './CategoryList/CategoryList';
import CATEGORY_DATA from './categoryData';

import './Aside.scss';
const Aside = () => {
  return (
    <aside className="leftWrap">
      <div className="lnb">
        <div className="lnbInner">
          <ul className="categoryWarp">
            {CATEGORY_DATA.map(({ id, categoryName, categoryList }) => {
              return (
                <li className="category" key={id}>
                  <div className="categoryTitle">{categoryName}</div>
                  <ul className="childWrap">
                    <CategoryList categoryList={categoryList} />
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
