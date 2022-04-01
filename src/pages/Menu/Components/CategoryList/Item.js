import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Item = props => {
  const { id, categoryItem, parameter } = props;
  // console.log(id);

  const params = useParams();
  console.log(params);

  const navigate = useNavigate();
  return (
    <div
      className="childItems"
      onClick={() => {
        navigate(
          // `/products/all?category_id=${parameter}`
          // `/products/detail/${id}`,
          `/products/all/category_id=${id}`,
          {
            state: props,
          }
        );
      }}
    >
      {categoryItem}
    </div>
  );
};

export default Item;
