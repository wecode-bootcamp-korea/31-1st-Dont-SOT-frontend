import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.scss';

const Card = props => {
  const { product } = props;

  const navigate = useNavigate();

  return (
    <>
      {product.map(data => {
        return (
          <li className="item" key={data.id}>
            <div
              className="itemSpacer"
              onClick={() => {
                navigate(`/products/${data.id}`, {
                  state: props,
                });
              }}
            >
              <div className="itemImgBox">
                <img
                  src={`https://robohash.org/${data.id}?set=set2&size=180x180`}
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
                <h4 className="itemTitle">{data.name}</h4>
                <div className="itemPrice">
                  <span className="blind">가격:</span>
                  <strong>{data.price}</strong>원
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </>
  );
};

export default Card;
