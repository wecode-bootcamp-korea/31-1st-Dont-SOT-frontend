import React from 'react';
import { useNavigate } from 'react-router-dom';

const Item = props => {
  const navigate = useNavigate();

  const { id, categoryItem } = props;

  const goToSpec = () => {
    navigate(`/products?menu=${id}&category=${id}`);
    window.location.reload();
  };

  return (
    <div className="childItems" onClick={goToSpec}>
      {categoryItem}
    </div>
  );
};

export default Item;
