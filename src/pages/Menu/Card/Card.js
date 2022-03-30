import React from 'react';
import './Card.scss';
import { Link } from 'react-router-dom';

const Card = () => {
  return (
    <li className="item">
      <div className="itemSpacer">
        <Link to="#none" />
        <div className="itemImgBox">
          <img src="/images/fooditem.png" alt="" className="itemImg" />
        </div>
        <div className="itemIcon">
          <div className="itemIconNew">
            <span>NEW</span>
          </div>
        </div>
        <div className="itemTextBox">
          <h4 className="itemTitle">한입 족발 도시락</h4>
          <div className="itemPrice">
            <span className="blind">가격:</span>
            <strong>8,500</strong>원
          </div>
        </div>
      </div>
    </li>
  );
};

export default Card;
