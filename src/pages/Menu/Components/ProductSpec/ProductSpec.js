import React from 'react';
import { useParams } from 'react-router-dom';
// import { useLocation, useParams } from 'react-router-dom';

const Product = () => {
  const params = useParams();
  console.log(params);
  // 제품 상세 페이지 레이아웃
  // const location = useLocation();
  // console.log('state', location.state);
  // console.log(location);
  // const params = useParams();
  // console.log(params);
  return <div>프로덕트 스팩</div>;
};

export default Product;
