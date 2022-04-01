import React from 'react';
import CartList from './CartItem/CartItem';
import '../Cart/Cart.scss';

const Cart = () => {
  return (
    <div className="cart">
      <ul>
        <CartList />
      </ul>
      <div className="totalPrice">
        <h3>결제금액</h3>
        <p className="allprice">총 결제 금액</p>
        <span>총금액</span>
        <span>원</span>
        <p className="allprice">배송비</p>
        <span>3000원</span>
        <h2>전체 주문 금액</h2>
        <span>배송비합총액</span>
        <span>원</span>
      </div>
      <button>주문</button>
    </div>
  );
};

export default Cart;
