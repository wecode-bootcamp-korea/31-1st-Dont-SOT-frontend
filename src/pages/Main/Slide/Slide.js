import React from 'react';
import './slide.scss';
const Slide = ({ id, src }) => {
  return (
    <li id={id}>
      <img src={src} alt="" />
    </li>
  );
};

export default Slide;
