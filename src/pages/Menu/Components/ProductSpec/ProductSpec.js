import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductSpec.scss';
// import { useLocation, useParams } from 'react-router-dom';

const Product = () => {
  const params = useParams();
  // console.log(params);
  // 제품 상세 페이지 레이아웃
  // const location = useLocation();
  // console.log('state', location.state);
  // console.log(location);
  // const params = useParams();
  // console.log(params);
  return (
    <>
      <header className="inner">
        <div>nav</div>
      </header>
      <div className="subPage">
        <div className="contentMenu inner">
          <section className="menuView">
            <div className="menuViewWrap">
              <div className="onTitle">
                <h2 className="title">
                  <a href="#none" className="headerTitle">
                    전체메뉴
                  </a>
                </h2>
              </div>

              <div className="viewCont">
                <div className="menuDetail">
                  <div className="imgWrap">
                    <img
                      className="mainImg"
                      alt="메뉴사진"
                      src="/images/hansot.jpeg"
                    />
                  </div>

                  <div className="txtWrap">
                    <h3 className="title">
                      <span className="dp1">고기고기</span>
                      <span className="dp2">돈까스도련님고기고기</span>
                    </h3>

                    <p className="account">
                      돈까스와 떡햄버그, 치킨으로 구성된 도련님 도시락에
                      제육볶음과 소불고기를 더해 푸짐하고 가성비 좋은
                      도시락입니다.
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

                <div className="menuInfo quantity">
                  <h4 className="h4Tit">열량</h4>
                  <p className="kcalBox">
                    <span className="kcalValue">872,73</span>Kcal
                  </p>
                </div>

                <div className="menuInfo allergy">
                  <h4 className="h4Tit">알레르기</h4>
                  <div className="allergyWrap tabling">
                    <div className="list01 cell">
                      <dl className="dl">
                        <dt>난류(계란)</dt>
                        <dd className="true">
                          <span className="blind">포함</span>
                        </dd>
                      </dl>
                      <dl>
                        <dt>우유</dt>
                        <dd className="true">
                          <span className="blind">포함</span>
                        </dd>
                      </dl>{' '}
                      <dl>
                        <dt>메밀</dt>
                        <dd className="making">
                          <span className="blind">포함</span>
                        </dd>
                      </dl>
                    </div>
                    <div className="list02 cell">
                      <dl className="dl">
                        <dt>난류(계란)</dt>
                        <dd className="true">
                          <span className="blind">포함</span>
                        </dd>
                      </dl>
                      <dl>
                        <dt>우유</dt>
                        <dd className="true">
                          <span className="blind">포함</span>
                        </dd>
                      </dl>{' '}
                      <dl>
                        <dt>메밀</dt>
                        <dd className="making">
                          <span className="blind">포함</span>
                        </dd>
                      </dl>
                    </div>
                    <div className="list03 cell">
                      <dl className="dl">
                        <dt>난류(계란)</dt>
                        <dd className="true">
                          <span className="blind">포함</span>
                        </dd>
                      </dl>
                      <dl>
                        <dt>우유</dt>
                        <dd className="true">
                          <span className="blind">포함</span>
                        </dd>
                      </dl>{' '}
                      <dl>
                        <dt>메밀</dt>
                        <dd className="making">
                          <span className="blind">포함</span>
                        </dd>
                      </dl>
                    </div>
                    <div className="list04 cell">
                      <dl className="dl">
                        <dt>난류(계란)</dt>
                        <dd className="true">
                          <span className="blind">포함</span>
                        </dd>
                      </dl>
                      <dl>
                        <dt>우유</dt>
                        <dd className="true">
                          <span className="blind">포함</span>
                        </dd>
                      </dl>{' '}
                      <dl>
                        <dt>메밀</dt>
                        <dd className="making">
                          <span className="blind">포함</span>
                        </dd>
                      </dl>
                    </div>
                    <div className="list05 cell">
                      <dl className="dl">
                        <dt>난류(계란)</dt>
                        <dd className="true">
                          <span className="blind">포함</span>
                        </dd>
                      </dl>
                      <dl>
                        <dt>우유</dt>
                        <dd className="true">
                          <span className="blind">포함</span>
                        </dd>
                      </dl>{' '}
                      <dl>
                        <dt>메밀</dt>
                        <dd className="making">
                          <span className="blind">포함</span>
                        </dd>
                      </dl>
                    </div>
                    <div className="list06 cell">
                      <dl className="dl">
                        <dt>난류(계란)</dt>
                        <dd className="true">
                          <span className="blind">포함</span>
                        </dd>
                      </dl>
                      <dl>
                        <dt>우유</dt>
                        <dd className="true">
                          <span className="blind">포함</span>
                        </dd>
                      </dl>{' '}
                      <dl>
                        <dt>메밀</dt>
                        <dd className="making">
                          <span className="blind">포함</span>
                        </dd>
                      </dl>
                    </div>
                  </div>
                  <div className="classify">
                    <ul>
                      <li className="list01 list">
                        해당 알레르기 성분이 포함되어 있음
                      </li>
                      <li className="list02 list">
                        해당 알레르기 성분이 직접적으로 포함되어 있지 않지만,
                        해당 성분을 가공하는 시설에서 가공/제조 하였음
                      </li>
                      <li className="list03 list">
                        해당 알레르기 성분이 포함되어 있지 않음
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="menuInfo country">
                  <h4 className="h4Tit">원산지</h4>
                  <div className="countryWrap">
                    <dl className="dl">
                      <dt>쌀</dt>
                      <dd>국산</dd>
                    </dl>
                    <dl className="dl">
                      <dt>쌀</dt>
                      <dd>국산</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Product;
