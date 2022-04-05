import React from 'react';

const CartList = ({ id, price, option, quantity, test }) => {
  const handleQuantity = e => {
    const { value } = e.target;
    test(id, Number(value));
  };

  return (
    <li className="cartList">
      <div className="cartImg">
        <img src="" alt="" />
      </div>
      <div className="cartInfo">
        <dl>
          <dt className="productName bold">아이템 이름</dt>
          <dd className={`addOption ${option ? '' : 'hide'}`}>
            옵션 : 곱빼기 추가
          </dd>
          <dd className="addPrice">상품가격</dd>
        </dl>
        <p className="confirmPrice">{(price * quantity).toLocaleString()}원</p>
      </div>
      <div className="cartUtil">
        <button type="button" className="cartDeleteButton">
          삭제
        </button>
        <div className="cartQuantity">
          <input
            type="text"
            className="countQuantity"
            placeholder="수량"
            value={quantity}
            onChange={handleQuantity}
          />
          <button type="button" className="changeQuantity">
            변경
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartList;
