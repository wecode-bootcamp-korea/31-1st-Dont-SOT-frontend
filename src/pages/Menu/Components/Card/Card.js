import React from 'react';
import './Card.scss';
import { Link } from 'react-router-dom';

const Card = props => {
  const { id, menuName, price } = props;
  return (
    <li className="item">
      <div className="itemSpacer">
        <Link to="#none" />
        <div className="itemImgBox">
          <img
            src={`https://robohash.org/${id}?set=set2&size=180x180`}
            alt="메뉴"
            className="itemImg"
          />
        </div>
        <div className="itemIcon">
          <div className="itemIconNew">
            <span>NEW</span>
          </div>
        </div>
        <div className="itemTextBox">
          <h4 className="itemTitle">{menuName}</h4>
          <div className="itemPrice">
            <span className="blind">가격:</span>
            <strong>{price}</strong>원
          </div>
        </div>
      </div>
    </li>
  );
};

export default Card;
