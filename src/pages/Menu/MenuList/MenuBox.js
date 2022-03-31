import React from 'react';
import Card from '../Components/Card/Card';

const MenuBox = props => {
  const { category, categoryList } = props;
  return (
    <article className="listWrap">
      {categoryList.map(data => {
        return (
          <>
            <div className="header" key={data.id}>
              <p className="cateTitle">{category}</p>
              <h3 className="cateTitleItem">{data.miniCategory}</h3>
            </div>
            <ul className="menulistBox">
              <Card contents={data.contents} />
            </ul>
          </>
        );
      })}
    </article>
  );
};

export default MenuBox;
