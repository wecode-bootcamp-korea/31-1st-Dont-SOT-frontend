import React from 'react';
import './Nav.scss';
import './navData';
import NAV_LIST from './navData';
import NavList from './NavList';

const Nav = () => {
  console.log(NAV_LIST);
  return (
    <div className="nav">
      <div className="navWrap">
        <h1 className="logo">
          <img src="" alt="" />
        </h1>
        <ul className="navListWrap">
          {NAV_LIST.map(list => (
            <NavList key={list.id} {...list} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
