import React from 'react';

const Best = props => {
  const { src, title, price } = props;
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

export default Best;
