import React, { useEffect, useState } from 'react';
import API from '../../config';
import CartList from './CartList/CartList';
import './Cart.scss';

const Cart = () => {
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    fetch(`${API.Cart}`, {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(data => setCartList(data.results));
  }, []);

  const gototalPrice = () => {
    let totalPrice = 0;
    for (let i = 0; i < cartList.length; i++) {
      totalPrice += cartList[i].price * cartList[i].quantity;
    }
    return totalPrice;
  };

  const addCart = (id, quantity) => {
    fetch(`${API.Cart}/${id}`, {
      method: 'PATCH',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        quantity: quantity,
      }),
    })
      .then(response => response.json())
      .then(res => {
        if (res.message === 'SUCCESS') {
          alert('수량이변경되었습니다');
        }
      });
  };

  const deleteCart = id => {
    fetch(`${API.Cart}/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    }).then(res => {
      if (res.status === 204) {
        alert('삭제되었습니다.');
        fetch(`${API.Cart}`, {
          headers: {
            Authorization: localStorage.getItem('token'),
          },
        })
          .then(res => res.json())
          .then(data => setCartList(data.results));
      }
    });
  };

  const allTotalPrice = totalPrice => totalPrice() + 3000;

  const updateState = (cart_id, quantity) => {
    const cartIndex = cartList.findIndex(cart => cart.cart_id === cart_id);
    const selectedCart = cartList[cartIndex];
    selectedCart.quantity = quantity;
    setCartList([...cartList]);
  };

  return (
    <div className="cart inner">
      <p className="cartTitle">장바구니</p>
      <ul className="cartWrap">
        {cartList.length === 0 ? (
          <li className="emptyCart">장바구니가 비었습니다</li>
        ) : (
          cartList.map(list => {
            const { cart_id, price, sizeup, quantity, image, product_name } =
              list;
            return (
              <CartList
                product_name={product_name}
                image={image}
                id={cart_id}
                key={cart_id}
                price={price}
                sizeup={sizeup}
                quantity={quantity}
                updateState={updateState}
                addCart={addCart}
                deleteCart={deleteCart}
              />
            );
          })
        )}
      </ul>
      <div className="cartTotal">
        <p className="title">결제금액</p>
        <dl className="totalWrap">
          <dt className="totalTitle">상품 결제 금액</dt>
          <dd className="totalPrice">
            {gototalPrice().toLocaleString()}
            <span>원</span>
          </dd>
          <dt className="totalTitle">배송비</dt>
          <dd className="totalPrice">
            3,000<span>원</span>
          </dd>
          <dt className="totalTitle">전체 결제 금액</dt>
          <dd className="totalPrice">
            {allTotalPrice(gototalPrice).toLocaleString()}
            <span>원</span>
          </dd>
        </dl>
      </div>
    </div>
  );
};

export default Cart;
