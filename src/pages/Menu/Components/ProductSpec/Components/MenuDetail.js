import React from 'react';

const MenuDetail = () => {
  return (
    <div className="menuDetail">
      <div className="imgWrap">
        <img className="mainImg" alt="메뉴사진" src="/images/hansot.jpeg" />
      </div>

      <div className="txtWrap">
        <h3 className="title">
          <span className="dp1">고기고기</span>
          <span className="dp2">돈까스도련님고기고기</span>
        </h3>

        <p className="account">
          돈까스와 떡햄버그, 치킨으로 구성된 도련님 도시락에 제육볶음과
          소불고기를 더해 푸짐하고 가성비 좋은 도시락입니다.
        </p>

        <div className="option">
          <ul className="contArea">
            <li>
              <span className="formCheckbox">
                <input
                  type="checkbox"
                  id="checkbox"
                  name="option"
                  value="300"
                  className="inp"
                />
                <label for="checkbox" className="label">
                  한솥밥 곱빼기
                </label>
              </span>
              <span className="price">
                <em>300</em>원
              </span>
            </li>
          </ul>
        </div>

        <hr className="hr" />
        <div className="total">
          <dl className="priceBox">
            <dt className="blind">상품+옵션</dt>
            <dd>
              <span className="price">5,800</span>
              <span className="totalOption">
                <em className="totalOptionValue">0</em>
              </span>
            </dd>
          </dl>
          <div className="priceWrap">
            <span className="totalPrice">
              <em className="totalPriceValue">5,800</em>원
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuDetail;
