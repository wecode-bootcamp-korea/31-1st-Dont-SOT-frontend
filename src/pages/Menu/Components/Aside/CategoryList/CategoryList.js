import React from 'react';
import Item from './Item';
import './CategoryList.scss';

const CategoryList = ({ categoryList }) => {
  return (
    <li className="categoryList">
      {categoryList &&
        categoryList.map(({ id, categoryItem }) => {
          return <Item key={id} categoryItem={categoryItem} />;
        })}
    </li>
  );
};

export default CategoryList;
