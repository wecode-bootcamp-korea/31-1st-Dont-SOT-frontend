import React, { useEffect, useState } from 'react';
import CartList from './CartItem/CartItem';
import '../Cart/Cart.scss';

const Cart = () => {
  const [cartList, setCartList] = useState([]);
  const [preTotal, setPreTotal] = useState([]);
  const [cartTotal, setCartTotal] = useState(3000);

  // const presum = cartList.reduce((a, b) => {
  //   const { price, quantity } = b;
  //   let sum = a + price * quantity;
  //   return setPreTotal(sum);
  // });

  // console.log(presum);
  // const [item , setItem]=useState()
  // const [validation,   setValidation] = useState(false);
  // const token = [localStorage.getItem('token')];
  // console.log(preTotal);
  useEffect(() => {
    // if (!token) {
    //   setValidation(true);
    // }

    fetch('http://localhost:3000/data/cartData.json', {
      // headers: {
      //   method: 'GET',
      //   Authorization: token,
      // },
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => setCartList(data));
  }, []);

  return (
    <div className="cart">
      <div className="cartHead bold">
        <h2>장바구니</h2>
      </div>
      <ul>
        {cartList.map(list => {
          return (
            <CartList
              id={list.id}
              key={list.id}
              price={list.price}
              option={list.option}
              quantity={list.quantity}
              // updatePrice={updatePrice}
            />
          );
        })}
      </ul>
      <h3 className="priceHead">결제금액</h3>
      <div className="priceArea">
        <p className="widtharea">총 결제 금액</p>
        <div className="right">
          <span className="allpriceRight bold">총금액</span>
          <span>원</span>
        </div>
      </div>
      <div>
        <div className="priceArea">
          <p className="widtharea">배송비</p>
          <div className="right">
            <span>3000</span>
            <span>원</span>
          </div>
        </div>
      </div>
      <div className="priceArea">
        <h2 className="widtharea last">전체 주문 금액</h2>
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
