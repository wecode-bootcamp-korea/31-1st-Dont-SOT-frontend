import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Item.scss';

const Item = ({ categoryItem }) => {
  const navigate = useNavigate();
  const goToSpec = () => {
    navigate(`/products?category=${categoryItem}`);
  };

  return (
    <div className="item" onClick={goToSpec}>
      {categoryItem}
    </div>
  );
};

export default Item;
