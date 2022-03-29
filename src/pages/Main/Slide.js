import React from 'react';

const Slide = props => {
  const { id, src } = props;

  return (
    <li id={id}>
      <img src={src} alt="" />
    </li>
  );
};

export default Slide;
