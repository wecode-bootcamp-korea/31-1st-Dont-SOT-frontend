import React from 'react';

const NavList = ({ category, list }) => {
  return (
    <li className="navList">
      <p className="listTitle bold">{category}</p>
      <ul className="listWrap">
        {list.map(item => (
          <li className="list" key={item.id}>
            {item.data}
          </li>
        ))}
      </ul>
    </li>
  );
};

export default NavList;
