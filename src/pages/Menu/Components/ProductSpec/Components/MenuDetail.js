import React, { useState } from 'react';
import API from '../../../../../config';
import './MenuDetail.scss';

const MenuDetail = ({ name, description, price, image }) => {
  const [isCheckbox, setIsCheckbox] = useState(false);
  const [addPrice, setAddPrice] = useState(0);

  const optionPrice = 300;
  const totalPrice = price + (isCheckbox && optionPrice);

  const activeCheckbox = () => {
    setIsCheckbox(!isCheckbox);
    additionalAmount();
  };

  const additionalAmount = () => {
    if (!isCheckbox === true) {
      setAddPrice(300);
    } else {
      setAddPrice(0);
    }
  };

  const addCart = () => {
    const config = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: localStorage.getItem('Authorization'),
      },
      body: JSON.stringify({
        product_name: name,
        sizeup: isCheckbox,
      }),
    };
    fetch(`${API.Cart}`, config)
      .then(response => response.json())
      .then(result => {
        if (result.message === 'SUCCESS') {
          alert('장바구니 추가되었습니다.');
        } else if (result.message === 'ALREADY_EXIST') {
          alert('수량 추가 되었습니다.');
        } else if (result.message === 'KEY_ERROR') {
          alert('장바구니 추가를 실패하였습니다.');
        }
      });
  };

  return (
    <div className="menuDetail">
      <div className="imgWrap">
        <img className="mainImg" alt="메뉴사진" src={image} />
      </div>
      <div className="txtWrap">
        <h3 className="title">
          <span className="dp1">메뉴</span>
          <span className="dp2">{name}</span>
        </h3>
        <p className="account"> {description}</p>
        <div className="option">
          <ul className="contArea">
            <li>
              <span className="formCheckbox">
                <input
                  type="checkbox"
                  id="checkbox"
                  name="option"
                  value="300"
                  onClick={activeCheckbox}
                  className="multiplicationInp"
                />
                <label
                  htmlFor="checkbox"
                  className={!isCheckbox ? 'label' : 'deactiveLabel'}
                >
                  한솥밥 곱빼기
                </label>
              </span>
              <span className="price">
                <em>{optionPrice}</em>원
              </span>
            </li>
          </ul>
        </div>
        <hr className="hr" />
        <div className="total">
          <dl className="priceBox">
            <dt className="blind">상품+옵션</dt>
            <dd>
              <span className="price">{price}</span>
              <span className="totalOption">
                <em className="totalOptionValue">{addPrice}</em>
              </span>
            </dd>
          </dl>
          <div className="priceWrap">
            <span className="totalPrice">
              <em className="totalPriceValue">{totalPrice}</em>원
            </span>
          </div>
        </div>
        <div className="cartBox">
          <button className="btnCart" onClick={addCart}>
            장바구니에 추가
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuDetail;
