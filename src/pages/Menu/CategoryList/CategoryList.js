import React from 'react';
import Item from './Item';

const CategoryList = props => {
  const { categoryList } = props;
  return (
    <li className="child">
      {categoryList &&
        categoryList.map((category, idx) => {
          return (
            <Item key={category.id} categoryItem={category.categoryItem} />
          );
        })}
    </li>
  );
};

export default CategoryList;
