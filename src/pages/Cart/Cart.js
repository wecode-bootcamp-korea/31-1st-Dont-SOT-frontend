import React, { useEffect, useState } from 'react';
import CartList from './CartList/CartList';
import './cart.scss';

const Cart = () => {
  const [cartList, setCartList] = useState([]);
  const totalPrice = () => {
    let totalPrice = 0;
    for (let i = 0; i < cartList.length; i++) {
      totalPrice += cartList[i].price * cartList[i].quantity;
    }
    return totalPrice;
  };

  useEffect(() => {
    fetch('/data/cartData.json')
      .then(res => res.json())
      .then(data => {
        setCartList(data);
      });
  }, []);

  const test = (id, quantity) => {
    const cartIndex = cartList.findIndex(cart => cart.id === id);
    const selectedCart = cartList[cartIndex];
    selectedCart.quantity = quantity;
    cartList[cartIndex] = selectedCart;
    setCartList([...cartList]);
  };

  return (
    <div className="cart inner">
      <p className="cartTitle">장바구니</p>
      <ul className="cartWrap">
        {cartList.map(list => {
          const { id, price, option, quantity } = list;
          return (
            <CartList
              id={id}
              key={id}
              price={price}
              option={option}
              quantity={quantity}
              test={test}
            />
          );
        })}
      </ul>
      <div className="cartTotal">
        <p className="title">결제금액</p>
        <dl className="totalWrap">
          <dt className="totalTitle">상품 결제 금액</dt>
          <dd className="totalPrice">
            {totalPrice().toLocaleString()}
            <span>원</span>
          </dd>
          <dt className="totalTitle">배송비</dt>
          <dd className="totalPrice">
            3,000<span>원</span>
          </dd>
          <dt className="totalTitle">전체 결제 금액</dt>
          <dd className="totalPrice">
            {totalPrice().toLocaleString()}
            <span>원</span>
          </dd>
        </dl>
      </div>
    </div>
  );
};

export default Cart;
