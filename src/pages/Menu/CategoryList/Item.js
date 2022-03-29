import React from 'react';

const Item = props => {
  const { categoryItem } = props;
  return <div className="childItems">{categoryItem}</div>;
};

export default Item;
