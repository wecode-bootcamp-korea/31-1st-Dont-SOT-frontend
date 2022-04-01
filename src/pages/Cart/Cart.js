import React from 'react';
import CartList from './CartItem/CartItem';
import '../Cart/Cart.scss';

const Cart = () => {
  return (
    <div className="cart">
      <ul>
        <CartList />
      </ul>
      <div className="total">
        <div className="totalPrice">
          <div className="allPrice" />
          <h3>결제금액</h3>
          <span>총 결제 금액</span>
          <div className="right">
            <span className="allpriceRight">총금액</span>
            <span>원</span>
          </div>
          <div>
            <div className="beverage">
              <p className="allprice">배송비</p>
              <div className="right">
                <span>3000원</span>
              </div>
            </div>
          </div>
          <div className="totalprice3">
            <h2>전체 주문 금액</h2>
            <div className="right">
              <span>배송비합총액</span>
              <span>원</span>
            </div>
          </div>
        </div>
        <button>주문</button>
      </div>
    </div>
  );
};

export default Cart;
