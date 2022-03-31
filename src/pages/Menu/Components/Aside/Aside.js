import React from 'react';
import { useNavigate } from 'react-router-dom';
import CategoryList from '../CategoryList/CategoryList';
import CATEGORY_DATA from './categoryData';

import './Aside.scss';
const Aside = () => {
  const navigate = useNavigate();
  return (
    <aside className="leftWrap">
      <div className="lnb">
        <div className="lnbInner">
          <ul className="categoryWarp">
            {CATEGORY_DATA.map(category => {
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
