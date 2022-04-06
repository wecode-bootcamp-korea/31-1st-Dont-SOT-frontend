import { useState } from 'react';
import '../CartItem/CartItem.scss';

const CartItem = ({ id, price, option, updatePrice, quantity }) => {
  const [count, setCount] = useState(quantity);
  const [prePrice, setPrePrice] = useState(price * quantity);
  // const [preTotal, setPreTotal] = useState([]);
  const handleBtn = e => {
    const { value, id } = e.target;
    setCount(count => ({ ...count, [id]: value }));
  };

  function addQuan() {
    if (count < 9) {
      setCount(count + 1);
      setPrePrice(price + price * count);
      // setPreTotal(preTotal => ({ ...preTotal, [id]: prePrice + price }));
      // updatePrice(prePrice + price);
    } else {
      alert('9개까지 주문가능합니다');
    }
  }

  function minusQuan() {
    if (count > 1) {
      setCount(count - 1);
      setPrePrice((price - price * count) * -1);
      // setPreTotal(preTotal => ({ ...preTotal, [id]: prePrice - price }));
    }
  }
  return (
    <li key={id}>
      <div className="cartItem">
        <div className="mainBox">
          <div className="imgbox">
            <img src="images\slide-img01.jpg" alt="상품이미지" />
          </div>
        </div>
        <div className="orederInfo">
          <dt className="bold">상품명</dt>
          <dd>상품내용</dd>
          <dd>{option && '곱빼기'}</dd>
        </div>
        <div className="orederPrice">
          <span id={id}>{prePrice}</span>
          <span>원</span>
          <div className="CounterButton">
            <input
              type="number"
              className="count bold"
              value={count}
              onChange={handleBtn}
            />
            <button className="submitBtn" type="button">
              변경
            </button>
          </div>
          <button className="delete" type="button">
            삭제
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;