import React from 'react';
import './Nav.scss';
import './navData';
import NAV_LIST from './navData';
import NavList from './NavList';

const Nav = () => {
  return (
    <div className="nav">
      <ul className="navUtil inner">
        <li>로그인</li>
        <li>회원가입</li>
        <li>
          <span>인스타</span>
          <span>페이스북</span>
        </li>
      </ul>
      <div className="navWrap inner">
        <h1 className="logo">
          <img src="/images/logo2.png" alt="" />
        </h1>
        <ul className="navListWrap">
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
