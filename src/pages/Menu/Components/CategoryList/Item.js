import React from 'react';
import { useNavigate } from 'react-router-dom';

const Item = props => {
  const navigate = useNavigate();
  const { categoryItem } = props;

  const goToSpec = () => {
    navigate(`/products?category=${categoryItem}`);
  };

  return (
    <div className="childItems" onClick={goToSpec}>
      {categoryItem}
    </div>
  );
};

export default Item;
