import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.scss';

const Card = ({ product }) => {
  const navigate = useNavigate();

  return (
    <ul className="card">
      {product.map(({ id, name, price }) => {
        return (
          <li className="item" key={id}>
            <div
              className="itemSpacer"
              onClick={() => {
                navigate(`/products/${id}`);
              }}
            >
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
                <h4 className="itemTitle">{name}</h4>
                <div className="itemPrice">
                  <span className="blind">가격:</span>
                  <strong>{price}</strong>원
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Card;
