import React from 'react';

const navItem = props => {
  const { data } = props;
  return <li className="list">{data}</li>;
};

export default navItem;
