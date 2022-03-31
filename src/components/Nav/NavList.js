import React from 'react';
import NavItem from './NavItem';

const NavList = props => {
  const { category, list } = props;
  return (
    <li className="navList">
      <p className="listTitle bold">{category}</p>
      <ul className="listWrap">
        {list.map(item => (
          <NavItem key={item.id} {...item} />
        ))}
      </ul>
    </li>
  );
};

export default NavList;
