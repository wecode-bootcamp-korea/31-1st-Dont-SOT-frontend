import React from 'react';
import './Country.scss';

const Country = ({ ingredient }) => {
  return (
    <div className="menuInfo country">
      <h4 className="h4Tit">원산지</h4>
      <div className="countryWrap">
        {ingredient.map(list => (
          <dl className="dl" key={list.id}>
            <dt>{list.name}</dt>
            <dd>{list.made_in}</dd>
          </dl>
        ))}
      </div>
    </div>
  );
};

export default Country;
