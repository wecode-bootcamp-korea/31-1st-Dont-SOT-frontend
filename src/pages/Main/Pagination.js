import React, { useState } from 'react';

const Pagination = props => {
  const { id, text, count } = props;

  // const handleButtonActive = () => {
  //   return count + id;
  // };

  return (
    <button type="button" id={id} className={count === id ? 'active' : ''}>
      {text}
    </button>
  );
};

export default Pagination;
