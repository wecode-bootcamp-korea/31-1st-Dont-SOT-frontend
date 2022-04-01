import React, { useEffect, useState } from 'react';
import CartList from './CartItem/CartItem';
import CartFooter from './CartFooter/CartFooter';
import '../Cart/Cart.scss';

const Cart = () => {
  const [count, setCount] = useState(0);
  const [list, setList] = useState([]);
  const [validation, setValidation] = useState(false);
  const token = [localStorage.getItem('token')];

  useEffect(() => {
    if (!token) {
      setValidation(true);
    }

    fetch(api, {
      headers: {
        method: 'GET',
        Authorization: token,
      },
    })
      .then(res => res.json())
      .then(data => setList(data)
  });

  function click() {
    setCount(count + 1);
  }

  const CARTDATA_LIST = [
    {
      id: 1,
      data: '총 결제 금액',
      price: '20000',
      unit: '원',
    },
    {
      id: 2,
      data: '배송비',
      price: '10000',
      unit: '원',
    },
  ];

  return (
    <div className="cart">
      <ul>
        <CartList />
      </ul>
      <div className="allPrice" />
      <h3 className="">결제금액</h3>
      <div>
        {CARTDATA_LIST.map(list => {
          return (
            <CartFooter
              id={list.id}
              key={list.id}
              data={list.data}
              price={list.price}
              unit={list.unit}
            />
          );
        })}
      </div>
      <div className="priceArea">
        <h2 className="widtharea">전체 주문 금액</h2>
        <div className="right">
          <span className="bold">배송비합총액</span>
          <span>원</span>
        </div>
      </div>
      {/* <button>주문</button> */}
    </div>
  );
};

export default Cart;
