import React from 'react';
import Quantity from './Components/Quantity';
import MenuDetail from './Components/MenuDetail';
import Allergy from './Components/Allergy';
import Country from './Components/Country';
import './ProductSpec.scss';

const Product = () => {
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
                <MenuDetail />
                <Quantity />
                <Allergy />
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
