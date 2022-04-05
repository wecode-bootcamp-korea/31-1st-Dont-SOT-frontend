import React, { useEffect, useState } from 'react';
import CartItem from './CartItem/CartItem';
import '../Cart/Cart.scss';

const Cart = () => {
  const [cartList, setCartList] = useState([]);
  const [preTotal, setPreTotal] = useState([]);
  const [cartTotal, setCartTotal] = useState(3000);

  const totalPrice = () => {
    let price = 0;
    for (let i = 0; i < cartList.length; i++) {
      const product = cartList[i];
      price = price + product.product_price * product.cart_quantity;
    }
    return price;
  };

  // const addCart = event => {
  //   event.preventDefault();
  //   fetch('http://10.58.6.204:8080/carts', {
  //     method: 'POST',
  //     headers: {
  //       Authorization:
  //         'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.w1MhoALGWd02twhfZ86Fgc6d2G48gHu4aAbELsEGlEs',
  //     },
  //     body: JSON.stringify(
  //       addedProduct.map(product => {
  //         return {
  //           product_id: id,
  //           size_id: product.size_id,
  //           quantity: product.quantity,
  //         };
  //       })
  //     ),
  //   });
  // };

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

  const test = () => {};

  return (
    <div className="cart">
      <div className="cartHead bold">
        <h2>장바구니</h2>
      </div>
      <ul>
        {cartList.map(list => {
          return (
            <CartItem
              id={list.id}
              key={list.id}
              price={list.price}
              option={list.option}
              quantity={list.quantity}
              // updatePrice={updatePrice}
              test={test}
            />
          );
        })}
      </ul>
      <h3 className="priceHead">결제금액</h3>
      <div className="priceArea">
        <p className="widtharea">총 결제 금액</p>
        <div className="right">
          <span className="allpriceRight bold">{preTotal}</span>
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
