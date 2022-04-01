import React from 'react';
import { useParams } from 'react-router-dom';
import Card from '../Components/Card/Card';

const MenuBox = props => {
  const { name, category } = props;
  // console.log(name, category);

  return (
    <article className="listWrap">
      {category &&
        category.map(data => {
          // console.log(category);
          return (
            <div key={data.id}>
              <div className="header">
                <p className="cateTitle">{name}</p>
                <h3 className="cateTitleItem">{data.name}</h3>
              </div>
              <ul className="menulistBox">
                <Card contents={data.products} />
              </ul>
            </div>
          );
        })}
    </article>
  );
};

export default MenuBox;
