import React from 'react';

const CartList = ({
  id,
  price,
  option,
  quantity,
  updateState,
  addCart,
  deleteCart,
}) => {
  const handleQuantity = e => {
    const { value } = e.target;
    if (value > 9) {
      alert('9개까지 주문가능합니다');
      return;
    }
    updateState(id, Number(value));
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
        <button type="button" className="cartDeleteButton" onClick={deleteCart}>
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
          <button type="button" className="changeQuantity" onClick={addCart}>
            변경
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartList;
