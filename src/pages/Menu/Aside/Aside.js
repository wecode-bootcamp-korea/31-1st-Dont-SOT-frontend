import React from 'react';
import './Aside.scss';

const Aside = () => {
  return (
    <aside className="leftWrap">
      <div className="lnb">
        <div className="lnbInner">
          <ul className="categoryWarp">
            <li
              className="category borderNone"
              // style="border-top: none;"
            >
              <p>
                <a
                  href="#none"
                  className="categoryTitle 
                              viewAll active "
                >
                  전체보기
                </a>
              </p>
            </li>
            <li className="category">
              <p>
                <a href="#none" className="categoryTitle">
                  신메뉴/행사
                </a>
              </p>
              <div>
                <ul className="childWrap">
                  <li className="child">
                    <a href="#none" className="childItem">
                      행사
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="category">
              <p>
                <a href="#none" className="categoryTitle">
                  프리미엄/고메이
                </a>
              </p>
              <div>
                <ul className="childWrap">
                  <li className="child">
                    <a href="#none" className="childItem">
                      프리미엄
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="category">
              <p>
                <a href="#none" className="categoryTitle">
                  사각도시락
                </a>
              </p>
              <div>
                <ul className="childWrap">
                  <li className="child">
                    <a href="#none" className="childItem">
                      고기고기시리즈
                    </a>
                  </li>
                  <li className="child">
                    <a href="#none" className="childItem">
                      모둠시리즈
                    </a>
                  </li>
                  <li className="child">
                    <a href="#none" className="childItem">
                      정식시리즈
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="category">
              <p>
                <a href="#none" className="categoryTitle">
                  보울도시락
                </a>
              </p>
              <div>
                <ul className="childWrap">
                  <li className="child">
                    <a href="#none" className="childItem">
                      마요
                    </a>
                  </li>
                  <li className="child">
                    <a href="#none" className="childItem">
                      카레
                    </a>
                  </li>
                  <li className="child">
                    <a href="#none" className="childItem">
                      볶음밥
                    </a>
                  </li>
                  <li className="child">
                    <a href="#none" className="childItem">
                      프리미엄 찌개/탕
                    </a>
                  </li>
                  <li className="child">
                    <a href="#none" className="childItem">
                      덮밥
                    </a>
                  </li>
                  <li className="child">
                    <a href="#none" className="childItem">
                      비빔밥
                    </a>
                  </li>
                  <li className="child">
                    <a href="#none" className="childItem">
                      어린이도시락
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="category">
              <p>
                <a href="#none" className="categoryTitle">
                  실속반찬/사이드
                </a>
              </p>
              <div>
                <ul className="childWrap">
                  <li className="child">
                    <a href="#none" className="childItem">
                      실속반찬
                    </a>
                  </li>
                  <li className="child">
                    <a href="#none" className="childItem">
                      스낵 시리즈
                    </a>
                  </li>
                  <li className="child">
                    <a href="#none" className="childItem">
                      간식안주 시리즈
                    </a>
                  </li>
                  <li className="child">
                    <a href="#none" className="childItem">
                      미니 반찬
                    </a>
                  </li>
                  <li className="child">
                    <a href="#none" className="childItem">
                      밥
                    </a>
                  </li>
                  <li className="child">
                    <a href="#none" className="childItem">
                      디저트
                    </a>
                  </li>
                  <li className="child">
                    <a href="#none" className="childItem">
                      어린이도시락
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
