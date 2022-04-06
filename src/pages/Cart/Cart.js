import React, { useEffect, useState } from 'react';
import API from '../../config';
import CartList from './CartList/CartList';
import './Cart.scss';

const Cart = () => {
  const [cartList, setCartList] = useState([]);

  // const token = localStorage.getItem('token');

  const totalPrice = () => {
    let totalPrice = 0;
    for (let i = 0; i < cartList.length; i++) {
      totalPrice += cartList[i].price * cartList[i].quantity;
    }
    return totalPrice;
  };

  const addCart = event => {
    event.preventDefault();
    fetch(`http://10.58.1.7:8000/carts`, {
      method: 'PATCH',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.MJy60KnmBIqFUe8QbpXi4qNYOfiG2JSVatifKy9xzT4',
      },
      body: JSON.stringify({
        product_id: event.product_id,
        quantity: event.quantity,
        sizeup: event.sizeup,
      }),
    })
      .then(response => response.json())
      .then(res => {
        if (res.status === 200) {
          alert('hi');
        }
        console.log(res);
      });
  };

  const deleteCart = event => {
    // setCartList(cartProduct =>
    //   cartList.filter(list => list.product_id !== id)
    // );
    fetch(`http://10.58.1.7:8000/carts`, {
      method: 'DELETE',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.MJy60KnmBIqFUe8QbpXi4qNYOfiG2JSVatifKy9xzT4',
      },
      body: JSON.stringify({
        product_id: event.product_id,
        sizeup: event.sizeup,
      }),
    });
  };

  // useEffect(() => {
  //   fetch('data/cartData.json')
  //     .then(res => res.json())
  //     .then(data => setCartList(data.results));
  // }, []);

  const allTotalPrice = totalPrice => totalPrice() + 3000;

  useEffect(() => {
    fetch(`http://10.58.1.7:8000/carts`, {
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.MJy60KnmBIqFUe8QbpXi4qNYOfiG2JSVatifKy9xzT4',
      },
    })
      .then(res => res.json())
      .then(data => setCartList(data.results));
  }, []);

  const updateState = (product_id, quantity) => {
    const cartIndex = cartList.findIndex(
      cart => cart.product_id === product_id
    );
    const selectedCart = cartList[cartIndex];
    selectedCart.quantity = quantity;
    setCartList([...cartList]);
  };

  return (
    <div className="cart inner">
      <p className="cartTitle">장바구니</p>
      <ul className="cartWrap">
        {cartList.map(list => {
          const { product_id, price, sizeup, quantity, image, product_name } =
            list;
          return (
            <CartList
              product_name={product_name}
              image={image}
              id={product_id}
              key={product_id}
              price={price}
              sizeup={sizeup}
              quantity={quantity}
              updateState={updateState}
              addCart={addCart}
              deleteCart={deleteCart}
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
            {allTotalPrice(totalPrice).toLocaleString()}
            <span>원</span>
          </dd>
        </dl>
      </div>
    </div>
  );
};

export default Cart;
