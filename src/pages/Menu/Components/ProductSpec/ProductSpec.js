import React, { useEffect, useState } from 'react';
import Quantity from './Components/Quantity';
import MenuDetail from './Components/MenuDetail';
import Allergy from './Components/Allergy';
import Country from './Components/Country';
import './ProductSpec.scss';
import { useParams, useNavigate } from 'react-router-dom';

const Product = () => {
  const [detail, setDetail] = useState();
  const params = useParams();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const fetchData = () => {
    async function fetchAndSetDetail() {
      const response = await fetch(
        `http://10.58.3.177:8000/products/${params.id}`
      );
      const data = await response.json();
      setDetail(data.results);
    }
    fetchAndSetDetail();
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="subPage">
      <div className="contentMenu inner">
        <section className="menuView">
          <div className="menuViewWrap">
            <div className="onTitle">
              <h2 className="title" onClick={goBack}>
                <a href="#none" className="headerTitle">
                  전체메뉴
                </a>
              </h2>
            </div>

            <div className="viewCont">
              <MenuDetail {...detail} />
              <Quantity />
              <Allergy />
              <Country />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Product;
