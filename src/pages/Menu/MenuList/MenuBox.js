import React from 'react';
import Card from '../Components/Card/Card';

const MenuBox = props => {
  const { category, categoryList } = props;
  return (
    <article className="listWrap">
      <div className="header">
        {categoryList.map(data => {
          return (
            <div key={data.id}>
              <p className="cateTitle">{category}</p>
              <h3 className="cateTitleItem">{data.miniCategory}</h3>
              <ul className="menulistBox">
                <Card contents={data.contents} />
              </ul>
            </div>
          );
        })}
      </div>
    </article>
  );
};

export default MenuBox;
