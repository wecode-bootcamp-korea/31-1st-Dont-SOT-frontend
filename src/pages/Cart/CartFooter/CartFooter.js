import React from 'react';

const CartFooter = ({ id, data, price, unit }) => {
  return (
    <div>
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
    </div>
  );
};

export default CartFooter;
