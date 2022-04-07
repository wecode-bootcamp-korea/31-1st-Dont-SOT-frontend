import React from 'react';
import './Quantity.scss';

const Quantity = ({ calory }) => {
  return (
    <div className="menuInfo quantity">
      <h4 className="h4Tit">열량</h4>
      <p className="kcalBox">
        <span className="kcalValue">{calory}</span>Kcal
      </p>
    </div>
  );
};

export default Quantity;
