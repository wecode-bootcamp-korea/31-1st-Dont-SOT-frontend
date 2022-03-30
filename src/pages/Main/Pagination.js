import React from 'react';

const Pagination = props => {
  const { id, text, count, handleSlider } = props;

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
