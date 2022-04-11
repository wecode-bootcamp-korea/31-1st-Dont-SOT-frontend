import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import NAV_LIST from './navData';
import './Nav.scss';

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [navActive, setNavActive] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [scrollActive, setScrollActive] = useState(false);

  const activeFixedHeight = 50;

  const scrollFixed = () => {
    if (scrollY > activeFixedHeight) {
      setScrollY(window.pageYOffset);
      setScrollActive(true);
    } else {
      setScrollY(window.pageYOffset);
      setScrollActive(false);
    }
  };

  useEffect(() => {
    const scrollListener = () => {
      window.addEventListener('scroll', scrollFixed);
    };
    scrollListener();
    return () => {
      window.removeEventListener('scroll', scrollFixed);
    };
  });

  const isMainPage = location.pathname === '/';
  const token = localStorage.getItem('token');

  return (
    <>
      <div className={`nav${scrollActive ? ' fixed' : ''}`}>
        <ul className="navUtil inner">
          <li
            className={token ? 'hide' : ``}
            onClick={() => navigate('/login')}
          >
            로그인
          </li>
          <li
            className={token ? '' : 'hide'}
            onClick={() => navigate('/carts')}
          >
            장바구니
          </li>
          <li onClick={() => navigate('/join')}>회원가입</li>
          <li>
            <span className="instagram">인스타</span>
            <span className="facebook">페이스북</span>
          </li>
        </ul>
        <div
          className="navWrap inner"
          onMouseLeave={() => {
            setNavActive(false);
          }}
        >
          <h1 className="logo" onClick={() => navigate('/')}>
            로고이미지
          </h1>
          <ul
            className={`navListWrap${navActive ? ' active' : ''}`}
            onMouseEnter={() => {
              setNavActive(true);
            }}
          >
            {NAV_LIST.map(item => (
              <li className="navList" key={item.id}>
                <p className="listTitle bold">{item.category}</p>
                <ul className="listWrap">
                  {item.list.map(list => (
                    <li
                      className="list"
                      key={list.id}
                      onClick={() => navigate(list.path)}
                    >
                      {list.data}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <div className="dim" />
        </div>
      </div>
      {!isMainPage && <div className="virtualNav" />}
    </>
  );
};

export default Nav;
