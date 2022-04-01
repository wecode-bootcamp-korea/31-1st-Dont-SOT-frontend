import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MenuBox from './MenuBox';
import './MenuList.scss';

const MenuList = props => {
  const [category, setCategory] = useState([]);

  const params = useParams();
  console.log(params); //params나왓으니까 이거 api 주소 넣어보기

  // 메뉴데이터에서
  const fetchData = () => {
    async function fetchAndSetCategory() {
      // api주소 넣고 데이터 걸러내기
      const response = await fetch(
        // 'http://10.58.7.71:8000/products/all?category_id=1'
        '/data/menuData.json'
      );
      const data = await response.json();
      setCategory(data);
      // console.log(data.results[0].products);
      // setCategory(data.results[0].products);
    }
    fetchAndSetCategory();
  };

  // useEffect(() => {
  //   fetch('http://10.58.7.71:8000/products/all')
  //     .then(res => res.json())
  //     .then(res => setCategory(res));
  // }, []);

  // console.log(category);

  useEffect(() => {
    fetchData();
  }, []);

  // console.log(category.filter(data => data.categoryList.parameter === params));

  return (
    <section className="menuListWrap">
      {category.map(data => {
        // console.log(data);
        return (
          <MenuBox
            key={data.id}
            id={data.id}
            name={data.name}
            category={data.category}
          />
        );
      })}
    </section>
  );
};

export default MenuList;
