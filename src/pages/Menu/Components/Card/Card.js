import React from 'react';
import './Card.scss';
import { useNavigate } from 'react-router-dom';

const Card = props => {
  const { contents } = props;
  // console.log(contents);
  const navigate = useNavigate();
  return (
    <>
      {contents &&
        contents.map(data => {
          return (
            <li className="item" key={data.id}>
              <div
                className="itemSpacer"
                onClick={() => {
                  navigate(`/products/detail/${data.id}`, {
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
