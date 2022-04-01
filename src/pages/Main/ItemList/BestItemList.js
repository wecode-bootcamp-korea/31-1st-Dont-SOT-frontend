import React from 'react';

const BestItemList = ({ src, title, price }) => {
  return (
    <li>
      <div className="imgWrap">
        <img src={src} alt="" />
      </div>
      <dl className="textWrap">
        <dt>{title}</dt>
        <dd>{price}</dd>
      </dl>
    </li>
  );
};

export default BestItemList;
