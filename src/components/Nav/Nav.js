import React, { useEffect, useState } from 'react';
import './Nav.scss';
import './navData';
import NAV_LIST from './navData';
import NavList from './NavList';

const Nav = () => {
  const [navActive, setNavActive] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [scrollActive, setScrollActive] = useState(false);

  const scrollFixed = () => {
    if (scrollY > 100) {
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
  return (
    <div className={'nav' + (scrollActive ? ' fixed' : '')}>
      <ul className="navUtil inner">
        <li>로그인</li>
        <li>회원가입</li>
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
        <h1 className="logo">로고이미지</h1>
        <ul
          className={'navListWrap' + (navActive ? ' active' : '')}
          onMouseEnter={() => {
            setNavActive(true);
          }}
        >
          {NAV_LIST.map(list => (
            <NavList key={list.id} {...list} />
          ))}
        </ul>
        <div className="dim" />
      </div>
    </div>
  );
};

export default Nav;
