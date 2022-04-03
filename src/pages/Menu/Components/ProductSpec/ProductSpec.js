import React from 'react';
import { useParams } from 'react-router-dom';
import Quantity from './Components/Quantity';
import MenuDetail from './Components/MenuDetail';
import Allergy from './Components/Allergy';
import Country from './Components/Country';
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
                {/* 메뉴 정보 컴포넌트 */}
                <MenuDetail />

                {/* 열량 컴포넌트  */}
                <Quantity />

                {/* 알레르기  */}
                <Allergy />

                {/* 원산지 */}
                <Country />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Product;
