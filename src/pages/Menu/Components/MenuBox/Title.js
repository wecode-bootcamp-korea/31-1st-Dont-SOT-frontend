import React from 'react';
import { useLocation } from 'react-router-dom';

const Title = () => {
  const location = useLocation();
  const locationSearch = decodeURI(location.search);
  const title = locationSearch.substring(10);
  return (
    <div className="header">
      <h3 className="cateTitleItem">{title}</h3>
    </div>
  );
};

export default Title;
