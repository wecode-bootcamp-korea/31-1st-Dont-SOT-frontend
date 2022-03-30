import React from 'react';
import './Aside.scss';
import CATEGORY_DATA from './categoryData';
import CategoryList from '../CategoryList/CategoryList';

const Aside = () => {
  return (
    <aside className="leftWrap">
      <div className="lnb">
        <div className="lnbInner">
          <ul className="categoryWarp">
            {CATEGORY_DATA.map((category, idx) => {
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
