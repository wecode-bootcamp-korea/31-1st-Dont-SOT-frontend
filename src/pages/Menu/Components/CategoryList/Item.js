import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Item = props => {
  const { id, categoryItem } = props;

  const goToSpec = () => {
    navigate(`/products?menu=${id}&category=${id}`);
  };

  const navigate = useNavigate();
  return (
    <div className="childItems" onClick={goToSpec}>
      {categoryItem}
    </div>
  );
};

export default Item;
