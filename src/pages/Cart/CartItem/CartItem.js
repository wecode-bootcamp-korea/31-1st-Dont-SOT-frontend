import React from 'react';
import '../CartItem/CartItem.scss';

const CartItem = () => {
  return (
    <li id="목데이터">
      <div className="cartItem">
        <div className="mainBox">
          <div className="imgbox">
            <img src="images\japan-g3495f33df_1920.jpg" alt="상품이미지" />
          </div>
        </div>
        <div className="orederInfo">
          <dt className="bold">상품명</dt>
          <dd>상품내용</dd>
          <dd>옵션</dd>
        </div>
        <div className="orederPrice">
          <span>가격</span>
          <span>원</span>
          <div className="CounterButton">
            <button type="button" className="minusButton">
              -
            </button>
            <input
              type="number"
              className="count bold"
              id="counter"
              readOnly
              value="1"
            />
            <button type="button" className="plusButton">
              +
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
