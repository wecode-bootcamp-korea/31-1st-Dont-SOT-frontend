import React from 'react';

const Pagination = ({ id, text, count, handleSlider }) => {
  return (
    <button
      type="button"
      id={id}
      onClick={() => {
        handleSlider(id);
      }}
      className={id === count ? 'active' : ''}
    >
      {text}
    </button>
  );
};

export default Pagination;
